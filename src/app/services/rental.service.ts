import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseListModel } from 'src/models/responseListModel';
import { Observable } from 'rxjs';
import { Rental } from 'src/models/rental';
import { ResponseModel } from 'src/models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  baseUrl = environment.backend.baseURL;
  constructor(private httpClient: HttpClient) { }
  
  // getRentals(): Observable<ResponseListModel<Rental>> {
  //   let newPath = this.baseUrl + "rentals/getdetails"
  //   return this.httpClient.get<ResponseListModel<Rental>>(newPath)
  // }
  // addRental(rental:Rental): Observable<ResponseModel>{
  //   let newPath = this.baseUrl + "rentals/add"
  //   return this.httpClient.post<ResponseModel>(newPath,rental)
  // }
  
}
