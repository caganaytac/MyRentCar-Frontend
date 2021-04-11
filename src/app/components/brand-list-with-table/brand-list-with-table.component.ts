import { Component, Input, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-list-with-table',
  templateUrl: './brand-list-with-table.component.html',
  styleUrls: ['./brand-list-with-table.component.css']
})
export class BrandListWithTableComponent implements OnInit {

  currentBrand:Brand
  brand:Brand
  brandUpdateForm: FormGroup;
  brands:Brand[]
  filterText = ""
  constructor(private brandService:BrandService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }
  deleteBrand(brand:Brand){
    this.brandService.delete(brand).subscribe(response =>{
      this.toastrService.success(response.messages,"Delete Message")
      setTimeout(() => {
        window.location.reload();
      }, 500);
    })
  }

  //Update

  createBrandForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    })
  }

  update() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({},this.brandUpdateForm.value)
      this.brandService.update(brandModel).subscribe(response => {
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
  
  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand
  }

}
