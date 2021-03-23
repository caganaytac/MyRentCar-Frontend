import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseListModel } from 'src/models/responseListModel';
import { Car } from 'src/models/car';
import { ItemResponseModel } from 'src/models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = environment.backend.baseURL;
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ResponseListModel<Car>>{
    let newPath = this.baseUrl+"cars/getdetails"
    return this.httpClient.get<ResponseListModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number): Observable<ResponseListModel<Car>>{
    let newPath = this.baseUrl + "cars/getdetailsbycolorId?colorId=" + colorId
    return this.httpClient.get<ResponseListModel<Car>>(newPath)
  }
  getCarsByBrand(brandId:number): Observable<ResponseListModel<Car>>{
    let newPath = this.baseUrl + "cars/getdetailsbybrandId?brandId=" + brandId
    return this.httpClient.get<ResponseListModel<Car>>(newPath)
  }


  getCarDetails(carId:number): Observable<ResponseListModel<Car>>{
    let newPath = this.baseUrl + "cars/getdetailsbycarId?carId=" + carId
    return this.httpClient.get<ResponseListModel<Car>>(newPath)
  }
  getCarDetailsByItem(carId:number): Observable<ItemResponseModel<Car>>{
    let newPath = this.baseUrl + "cars/getdetailsbycarid?carid=" + carId
    return this.httpClient.get<ItemResponseModel<Car>>(newPath)
  }
  

  // getdetailsbycarid
  getCarsByBrandAndColor(brandId:number,colorId:number):Observable<ResponseListModel<Car>>{
    let newPath = this.baseUrl + "cars/getdetailsbybrandid-and-colorid?brandid=" + brandId + "&colorid=" + colorId
    return this.httpClient.get<ResponseListModel<Car>>(newPath)
  }
}


