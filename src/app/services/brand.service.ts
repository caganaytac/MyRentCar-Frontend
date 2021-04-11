import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from 'src/app/models/brand';
import { ResponseListModel } from 'src/app/models/responseListModel';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = environment.backend.apiURL +"brands/"
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ResponseListModel<Brand>>{
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ResponseListModel<Brand>>(newPath) 
  }
  add(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl + "add"
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }
  update(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl + "update"
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }
  delete(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl + "delete"
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }
  getById(id:number):Observable<ItemResponseModel<Brand>>{
    let newPath = this.apiUrl + "getbyid?id="+id
    return this.httpClient.get<ItemResponseModel<Brand>>(newPath) 
  }
  // https://localhost:44377/api/brands/getbyid?id=1
}
