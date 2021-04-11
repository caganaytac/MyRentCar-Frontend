import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseListModel } from 'src/app/models/responseListModel';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental';
import { ResponseModel } from 'src/app/models/responseModel';
import { PaymentDto } from '../models/paymentDto';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = environment.backend.apiURL +"rentals/";
  constructor(private httpClient: HttpClient) { }
  
  getRentals(): Observable<ResponseListModel<Rental>> {
    let newPath = this.apiUrl + "getdetails"
    return this.httpClient.get<ResponseListModel<Rental>>(newPath)
  }

  addRental(rental:Rental,amount:Number):Observable<ResponseModel>{
    let newPath = this.apiUrl +"add";
    return this.httpClient.post<ResponseModel>(newPath,{rental:rental, payment:{amount:amount}});
  }
  
}
