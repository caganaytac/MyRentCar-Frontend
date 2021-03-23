import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/models/car';

@Component({
  selector: 'app-car-list-with-table',
  templateUrl: './car-list-with-table.component.html',
  styleUrls: ['./car-list-with-table.component.css']
})
export class CarListWithTableComponent implements OnInit {

  cars:Car[];
  currentCar:Car;
  filterText="";
  constructor(private carService:CarService) { }
 
  ngOnInit(): void {
    this.getCars();
  }
  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
    })
  }
  getCarClass(car:Car){
    if(car == this.currentCar){
      return "table-info cursorPointer"
    }else{
      return "cursorPointer"
    }
  }
  
  setCurrentCar(car:Car){
    this.currentCar=car;
  }
}
