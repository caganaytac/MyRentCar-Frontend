import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:Car;
  images:CarImage[];
  imageUrl = environment.backend.baseURL;


  constructor(private carService:CarService, 
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["carId"]){
        this.getCarDetails(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }

  getCarDetails(carId:number){
    this.carService.getCarDetailsByItem(carId).subscribe(response =>{
      this.car = response.data
    })
  }
  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response =>{
      this.images = response.data
    })
  }
  
  getBack(){
    this.carService.getCars();
  }

  getCurrentImageClass(image:CarImage){
    if(image == this.images[0]){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }
}
