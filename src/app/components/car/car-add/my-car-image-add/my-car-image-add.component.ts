import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-my-car-image-add',
  templateUrl: './my-car-image-add.component.html',
  styleUrls: ['./my-car-image-add.component.css']
})
export class MyCarImageAddComponent implements OnInit {

  @Input() car:Car

  carImageAddForm: FormGroup;
  dataLoaded = false;

  constructor(private carImageService: CarImageService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.createCarImageForm()
  }


  createCarImageForm() {
    this.carImageAddForm = this.formBuilder.group({
      file:['',Validators.required]
    })
  }

  add() {
    if (this.carImageAddForm.valid) {
      let carImageModel = Object.assign({},this.carImageAddForm.value)
      this.carImageService.add(carImageModel, this.car.carId).subscribe(response => {
        console.log(response)
        this.toastrService.success(response.messages, "Success")
      }, responseError => {
        if(responseError.error.Errors.length > 0)
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Exception")
        }
      })
    }
    else {
      this.toastrService.error("Your form is not full", "Atention")
    }
  }

}
