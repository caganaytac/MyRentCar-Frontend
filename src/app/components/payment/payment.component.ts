import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CreditCard } from 'src/app/models/creditCard';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { environment } from 'src/environments/environment';
import { PaymentDto } from 'src/app/models/paymentDto';
import { RentalService } from 'src/app/services/rental.service';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  baseUrl = environment.backend.baseURL
  rental:Rental
  car:Car
  creditCards:CreditCard[]
  selectedCreditCard:CreditCard
  creditCardForm:FormGroup
  paymentAmount:number = 0

  constructor( private activatedRoute:ActivatedRoute,
    private carService:CarService,
    private router:Router,
    private toastr: ToastrService, 
    private rentalService:RentalService,
    private creditCardService:CreditCardService,
    private userService:UserService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["rental"]){
        this.rental = JSON.parse(params["rental"]);
        this.getCarDetail();
        this.createCreditCardForm();
        this.getCreditCardsByUser();
        console.log(this.paymentAmount)
      }
    })
  }
  
  getCarDetail(){
    this.carService.getCarDetailsByItem(this.rental.carId).subscribe(response => {
     this.car= response.data;
     this.paymentCalculator();
    })
  }

  paymentCalculator(){
    if(this.rental.returnDate !== null ){
      const date1 = new Date(this.rental.rentDate.toString());
      const date2 = new Date(this.rental.returnDate.toString());
      const difference = date2.getTime() - date1.getTime();
    
      const numberOfDays = Math.ceil(difference / (1000 * 3600 * 24)); 
      this.paymentAmount = numberOfDays * this.car.dailyPrice;
       
     
      
      if(this.paymentAmount <= 0){
      this.router.navigate(['']);
      this.toastr.error("You are routing to main", "Invalid Transaction");
    }}}

    // pay(){
    // this.paymentService.pay(this.rental,this.amountOfPayment).subscribe(response => {
    //   this.askSaveCreditCard()
    //   this.router.navigate(['']);
    //   this.toastr.success(response.messages, "Success");
    // },
    // responseError =>{
    //   this.toastr.error(responseError.error.messages,"Attention")
    // })}



    pay(){
    this.rentalService.addRental(this.rental,this.paymentAmount).subscribe(response => {
      this.askSaveCreditCard()
      this.router.navigate(['']);
      this.toastr.success(response.messages, "Success");
    },
    responseError =>{
      this.toastr.error(responseError.messages,"Attention")
    })}




    // pay(){
    //   this.paymentDto={
    //     payment : this.payment,
    //     rental : this.rental}

    //   this.rentalService.addRental(this.paymentDto).subscribe(response => {
    //     this.askSaveCreditCard()
    //     this.router.navigate(['']);
    //     this.toastr.success(response.messages, "Success");
    //   },
    //   responseError =>{
    //     this.toastr.error(responseError.error.messages,"Attention")
    //   })}

    //Credit Card
    createCreditCardForm() {
      this.creditCardForm = this.formBuilder.group({
        cardHolderName: ['', Validators.required],
        cardNumber: ['', Validators.required],
        expMonth: ['', Validators.required],
        expYear: ['', Validators.required],
        cvv: ['', Validators.required]
      });
    }

    getCreditCardsByUser(){
      this.creditCardService.getByUserId(this.userService.getUserId()).subscribe(response => {
        this.creditCards = response.data
      })
    }

    askSaveCreditCard() {
      if (!this.selectedCreditCard)
        if (window.confirm('Would you like save your credit card?')) {
          let newCreditCard: CreditCard = {
            userId: this.userService.getUserId(),
            ...this.creditCardForm.value
          };
          this.saveCreditCard(newCreditCard);
          console.log(newCreditCard)
        }
    }

    saveCreditCard(creditCard:CreditCard){
      this.creditCardService.add(creditCard).subscribe(response => {
        this.toastr.success(response.messages,"Success")
      })
    }

    fillCardArea(selectedCreditCard: CreditCard) {
      this.selectedCreditCard = selectedCreditCard;
      if (this.selectedCreditCard)
        this.creditCardForm.patchValue({ ...this.selectedCreditCard });
      else this.creditCardForm.reset();
    }

}
