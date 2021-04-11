import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreditCard } from '../models/creditCard';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ResponseListModel } from '../models/responseListModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl = environment.backend.apiURL + "creditcards/"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ResponseListModel<CreditCard>>  {
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ResponseListModel<CreditCard>>(newPath)
  }

  getById(id:number):Observable<ItemResponseModel<CreditCard>>{
    let newPath = this.apiUrl +"getbyid?id="+id
    return this.httpClient.get<ItemResponseModel<CreditCard>>(newPath) 
  }

  getByUserId(userId:number):Observable<ResponseListModel<CreditCard>>{
    let newPath = this.apiUrl +"getbyuserid?userid=" + userId
    return this.httpClient.get<ResponseListModel<CreditCard>>(newPath)
  }

  add(creditCard:CreditCard): Observable<ResponseModel>{
    let newPath = this.apiUrl + "add"
    return this.httpClient.post<ResponseListModel<CreditCard>>(newPath,creditCard)
  }

  update(creditCard:CreditCard): Observable<ResponseModel>{
    let newPath = this.apiUrl + "update"
    return this.httpClient.post<ResponseListModel<CreditCard>>(newPath,creditCard)
  }

  delete(creditCard:CreditCard): Observable<ResponseModel>{
    let newPath = this.apiUrl + "delete"
    return this.httpClient.post<ResponseListModel<CreditCard>>(newPath,creditCard)
  }
}

