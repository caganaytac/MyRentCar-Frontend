import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  dataLoaded = false;
  currentCar:Car;
  baseUrl = environment.backend.baseURL;

  
  constructor(private carService : CarService,
     private activatedRoute: ActivatedRoute) { } 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]&&params["colorId"]){
        this.getCarsByBrandAndColor(params["brandId"],params["colorId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars():void{
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  getCarsByBrandAndColor(brandId:number, colorId:number){
    this.carService.getCarsByBrandAndColor(brandId,colorId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }


}
