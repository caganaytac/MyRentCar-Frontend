import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseListModel } from 'src/models/responseListModel';
import { Car } from 'src/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = environment.backend.baseURL;
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ResponseListModel<Car>>{
    return this.httpClient.get<ResponseListModel<Car>>(this.baseUrl+"cars/getdetails");
  }
}


