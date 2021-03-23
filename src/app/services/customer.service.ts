import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/models/customer';
import { ResponseListModel } from 'src/models/responseListModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = environment.backend.baseURL
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ResponseListModel<Customer>>{
    let newPath = this.baseUrl + "customers/getalldetails"
    return this.httpClient.get<ResponseListModel<Customer>>(newPath) 
  }
}
