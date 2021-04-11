import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseListModel } from 'src/app/models/responseListModel';
import { Car } from 'src/app/models/car';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = environment.backend.apiURL + "cars/";
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ResponseListModel<Car>>{
    let newPath = this.apiUrl+"getdetails"
    return this.httpClient.get<ResponseListModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number): Observable<ResponseListModel<Car>>{
    let newPath = this.apiUrl + "getdetailsbycolorId?colorId=" + colorId
    return this.httpClient.get<ResponseListModel<Car>>(newPath)
  }
  getCarsByBrand(brandId:number): Observable<ResponseListModel<Car>>{
    let newPath = this.apiUrl + "getdetailsbybrandid?brandid=" + brandId
    return this.httpClient.get<ResponseListModel<Car>>(newPath)
  }



  getCarDetailsByItem(carId:number): Observable<ItemResponseModel<Car>>{
    let newPath = this.apiUrl + "getdetailsbycarid?carid=" + carId
    return this.httpClient.get<ItemResponseModel<Car>>(newPath)
  }
  
  getCarsByBrandAndColor(brandId:number,colorId:number):Observable<ResponseListModel<Car>>{
    let newPath = this.apiUrl + "getdetailsbybrandid-and-colorid?brandid=" + brandId + "&colorid=" + colorId
    return this.httpClient.get<ResponseListModel<Car>>(newPath)
  }

  add(car:FormData):Observable<ResponseModel>{
    let newPath = this.apiUrl + "add"
    return this.httpClient.post<ResponseModel>(newPath,car)
  }
  update(car:FormData):Observable<ResponseModel>{
    let newPath = this.apiUrl + "update"
    return this.httpClient.post<ResponseModel>(newPath,car)
  }
  delete(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl + "delete"
    return this.httpClient.post<ResponseModel>(newPath,car)
  }
}


