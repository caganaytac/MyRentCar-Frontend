import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/app/models/customer';
import { ResponseListModel } from 'src/app/models/responseListModel';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ResponseModel } from '../models/responseModel';
import { CustomerForAdd } from '../models/customerForAdd';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = environment.backend.apiURL+"customers/"
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ResponseListModel<Customer>>{
    let newPath = this.apiUrl + "getalldetails"
    return this.httpClient.get<ResponseListModel<Customer>>(newPath) 
  }
  getCustomerByUserId(userId:number):Observable<ItemResponseModel<Customer>>{
    let newPath = this.apiUrl +"getbyuserid?id=" + userId
    return this.httpClient.get<ItemResponseModel<Customer>>(newPath)
  }
  add(customer:CustomerForAdd):Observable<ResponseModel>{
    let newPath = this.apiUrl +"add"
    return this.httpClient.post<ItemResponseModel<Customer>>(newPath,customer)
  }
  update(customer:CustomerForAdd):Observable<ResponseModel>{
    let newPath = this.apiUrl +"update"
    return this.httpClient.post<ItemResponseModel<Customer>>(newPath,customer)
  }
  delete(customer:CustomerForAdd):Observable<ResponseModel>{
    let newPath = this.apiUrl +"delete"
    return this.httpClient.post<ItemResponseModel<Customer>>(newPath,customer)
  }
}
