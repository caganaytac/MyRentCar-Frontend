import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';
import { Car } from 'src/models/car';
import { Customer } from 'src/models/customer';
import { Rental } from 'src/models/rental';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {


  constructor(
     private router:Router,
     private customerService:CustomerService,
     private toastr: ToastrService) { }

  customers:Customer[];
  customerId:Number;
  rentDate:Date;
  returnDate:Date;
  @Input() car:Car;

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response.data;
    })
  }

  getRentMinDate(){
    var today  = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0,10)
  }

  getReturnMinDate(){
    var today  = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().slice(0,10)
  }

  createRental(){
    let MyRental:Rental = {
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      carId: this.car.carId,
      customerId : parseInt(this.customerId.toString())
    }
    this.router.navigate(['/payment/', JSON.stringify(MyRental)]);
    this.toastr.info("Ödeme sayfasına yönlendiriliyorsunuz...", "Ödeme İşlemleri");
  }
}