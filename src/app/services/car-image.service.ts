import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from 'src/models/carImage';
import { ResponseListModel } from 'src/models/responseListModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  baseUrl = environment.backend.baseURL;
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ResponseListModel<CarImage>>{
    let newPath = this.baseUrl+"carImages/getall"
    return this.httpClient.get<ResponseListModel<CarImage>>(newPath);
  }
  getCarsByCarId(carId:number): Observable<ResponseListModel<CarImage>>{
    let newPath = this.baseUrl + "carImages/getallbycarId?carId=" + carId
    return this.httpClient.get<ResponseListModel<CarImage>>(newPath)
  }
}
