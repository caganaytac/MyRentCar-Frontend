
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brand: Brand
  brandUpdateForm: FormGroup;

  constructor(private brandService: BrandService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['brandId']) {
        this.getBrand(params['brandId']);
      }
    })

  }

  createBrandForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandName: ["brand.brandName", Validators.required],
    })
  }

  update() {
    if (this.brandUpdateForm.valid) {
      this.brandUpdateForm.addControl("brandId", new FormControl(this.brand.brandId))
      let brandModel = Object.assign({}, this.brandUpdateForm.value)
      this.brandService.update(brandModel).subscribe(response => {
        this.toastrService.success(response.messages, "Success")
        this.router.navigate(["/brands/list"])
      }, responseError => {
        if (responseError.error.Errors.length > 0)
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Validation Exception")
          }
      })
    }
    else {
      this.toastrService.error("Your form is not full", "Atention")
    }
  }

  getBrand(id: number) {
    this.brandService.getById(id).subscribe(response =>
      this.brand = response.data
    )
    this.createBrandForm()
  }
}
