import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {


  car: Car
  images:CarImage[]
  carUpdateForm: FormGroup;
  brands: Brand[]
  colors: Color[]
  files: File[] = null;
  formData: FormData = new FormData();
  imageUrl = environment.backend.baseURL;
  dataLoaded = false;

  constructor(private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private router:Router

  ) { }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarById(params["carId"])
        this.getColors()
        this.getBrands()
        this.updateCarForm()
        this.getCarImages(params["carId"])
      }
    })
  }

  getCarById(id: number) {
    this.carService.getCarDetailsByItem(id).subscribe(response => {
      this.car = response.data
      
    })
  }
  
  getCarImages(id:number){
    this.carImageService.getCarImagesByCarId(id).subscribe(response => {
      this.images = response.data
    })
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data,
        this.dataLoaded = true
    })
  }

  getColors(): void {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data,
        this.dataLoaded = true
    })
  }

  updateCarForm() {
    this.carUpdateForm = this.formBuilder.group({
      carName: ['car.carName', Validators.required],
      colorId: ['car.colorId', Validators.required],
      brandId: ['car.brandId', Validators.required],
      dailyPrice: ['car.dailyPrice', Validators.required],
      description: ['car.description', Validators.required],
      modelYear: ['car.modelYear', Validators.required],
      creditScore: ['car.creditScore', Validators.required],
      image: ['']
    })
  }

  handleFileInput(e: any) {
    for (let j = 0; j < e.target.files.length; j++) {
      let fileItem = e.target.files[j];
      this.formData.append('image', fileItem); 
    }
  }

  saveChanges() {
    if (this.carUpdateForm.valid) {
      this.carUpdateForm.addControl("carId", new FormControl(this.car.carId)),
      this.formData.append('carId', this.car.carId.toString());
      this.formData.append('carName', this.carUpdateForm.value.carName);
      this.formData.append('colorId', this.carUpdateForm.value.colorId);
      this.formData.append('brandId', this.carUpdateForm.value.brandId);
      this.formData.append('dailyPrice', this.carUpdateForm.value.dailyPrice);
      this.formData.append('creditScore', this.carUpdateForm.value.creditScore);
      this.formData.append('description', this.carUpdateForm.value.description);
      this.formData.append('modelYear', this.carUpdateForm.value.modelYear);
              
      this.carService.update(this.formData).subscribe(response => {
        this.toastrService.success(response.messages, "Success")
          this.router.navigate(["/cars/list"])
        
      }, responseError => {
        if (responseError.error.Errors.length > 0)
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Validation Exception")
          }
      })
    }
    else {
      this.toastrService.error("The form is missing.", "Attention")
    }
  }




}
