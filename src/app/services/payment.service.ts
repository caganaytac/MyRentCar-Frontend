import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rental } from 'src/models/rental';
import { ResponseModel } from 'src/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl = environment.backend.baseURL;
  constructor(private httpClient:HttpClient) { }
  
  pay(rental:Rental,amount:Number):Observable<ResponseModel>{
    let path = this.baseUrl +"rentals/paymentadd";
    rental.returnDate = undefined;
    return this.httpClient.post<ResponseModel>(path,{payment:{amount:amount},rental:rental});
  }
}

