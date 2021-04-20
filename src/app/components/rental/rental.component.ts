import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {


  constructor(
    private customerService: CustomerService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private authService:AuthService) { }

  customer: Customer
  rentDate: Date
  returnDate: Date
  companyName:string
  @Input() car: Car

  ngOnInit(): void {
    this.getCustomerByUserId()
  }

  getCustomerByUserId() {
    this.customerService.getCustomerByUserId(this.userService.getUserId()).subscribe(response => {
      this.customer = response.data
    })
  }

  getRentMinDate() {
    var today = new Date();
    today.setDate(today.getDate() + 1)
    return today.toISOString().slice(0, 10)
  }

  getReturnMinDate() {
    var today = new Date();
    today.setDate(today.getDate() + 2)
    return today.toISOString().slice(0, 10)
  }
  

  createRental() {
    let newRental: Rental = {
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      carId: this.car.carId,
      customerId: this.customer.customerId
    }
    this.router.navigate(['/payment', JSON.stringify(newRental)])
    this.toastr.info('You are routing to payment.', 'Info')
  }
}