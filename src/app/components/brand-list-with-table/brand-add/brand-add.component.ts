import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm: FormGroup;

  constructor( private brandService:BrandService,
    private toastrService: ToastrService,
      private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createBrandForm()
  }
  
  createBrandForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    })
  }

  add() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({},this.brandAddForm.value)
      this.brandService.add(brandModel).subscribe(response => {
        console.log(response)
        this.toastrService.success(response.messages, "Success")
        setTimeout(() => {
          window.location.reload();
        }, 500);
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
