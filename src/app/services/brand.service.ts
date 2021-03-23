import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from 'src/models/brand';
import { ResponseListModel } from 'src/models/responseListModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseUrl = environment.backend.baseURL
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ResponseListModel<Brand>>{
    let newPath = this.baseUrl + "brands/getall"
    return this.httpClient.get<ResponseListModel<Brand>>(newPath) 
  }
}
