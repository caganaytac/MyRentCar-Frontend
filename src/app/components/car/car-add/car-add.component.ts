import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  car:Car
  brands: Brand[]
  colors: Color[]
  carAddForm: FormGroup;
  carImageAddForm: FormGroup;
  files: File[] = null;
  formData: FormData = new FormData();
  dataLoaded = false;

  constructor(private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder

  ) { }

  
  ngOnInit(): void {
    this.getColors()
    this.getBrands()
    this.createCarForm()
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

  createCarForm() {
    this.carAddForm = this.formBuilder.group({
      carName: ['', Validators.required],
      colorId: ['0', Validators.required],
      brandId: ['0', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      modelYear: ['', Validators.required],
      creditScore:['',Validators.required],
      image: ['',Validators.required]
    })
  }
  
  handleFileInput(e: any) {
    for (let j = 0; j < e.target.files.length; j++) {
      let fileItem = e.target.files[j];
      this.formData.append('image', fileItem);
    }
  }

  add() {
    if (this.carAddForm.valid) {
      this.formData.append('carName', this.carAddForm.value.carName);
      this.formData.append('colorId', this.carAddForm.value.colorId);
      this.formData.append('brandId', this.carAddForm.value.brandId);
      this.formData.append('dailyPrice', this.carAddForm.value.dailyPrice);
      this.formData.append('creditScore', this.carAddForm.value.creditScore);
      this.formData.append('description', this.carAddForm.value.description);
      this.formData.append('modelYear', this.carAddForm.value.modelYear);
      this.carService.add(this.formData).subscribe(
        () => {
          window.location.reload();
        },
        (err) => {
          console.log(err);
        }
           
        );
      }
        
      //  else {
    //   this.toastrService.error("The form is missing","Attention")
    // }
  }

 
}
