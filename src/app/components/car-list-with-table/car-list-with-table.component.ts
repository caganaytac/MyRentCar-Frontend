import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-list-with-table',
  templateUrl: './car-list-with-table.component.html',
  styleUrls: ['./car-list-with-table.component.css']
})
export class CarListWithTableComponent implements OnInit {

  cars:Car[];
  currentCar:Car;
  filterText="";
  message:string;
 
  dataLoaded = false;

  constructor(private carService:CarService,
              private toastrService:ToastrService,
             
              ) { }
 
  ngOnInit() {
    this.getCars();
    
  }
  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
    })
  }
  
  setCurrentCar(car:Car){
    this.currentCar=car;
  }

  deleteCar(car:Car){
    if(window.confirm("Are you sure you want to delete this car?")){
        this.carService.delete(car).subscribe(data =>{
        
        setTimeout(() => {
          this.toastrService.success(data.messages,"Delete Message")
          window.location.reload();
        }, 500);
      })}
  }

 
}
