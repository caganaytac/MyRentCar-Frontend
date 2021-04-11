import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from 'src/app/models/carImage';
import { ResponseListModel } from 'src/app/models/responseListModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = environment.backend.apiURL;
  constructor(private httpClient: HttpClient) { }

  getCarImages(): Observable<ResponseListModel<CarImage>>{
    let newPath = this.apiUrl+"carImages/getall"
    return this.httpClient.get<ResponseListModel<CarImage>>(newPath);
  }
  getCarImagesByCarId(carId:number): Observable<ResponseListModel<CarImage>>{
    let newPath = this.apiUrl + "carImages/getallbycarId?carId=" + carId
    return this.httpClient.get<ResponseListModel<CarImage>>(newPath)
  }
  add(image:File, carId:number):Observable<ResponseModel>{
    let newPath = this.apiUrl+"carImages/add"
    return this.httpClient.post<ResponseModel>(newPath,image&&carId)
  }
}
