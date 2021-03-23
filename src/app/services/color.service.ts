import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from 'src/models/color';
import { ResponseListModel } from 'src/models/responseListModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  baseUrl = environment.backend.baseURL
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ResponseListModel<Color>>{
    let newPath = this.baseUrl + "colors/getall"
    return this.httpClient.get<ResponseListModel<Color>>(newPath) 
  }
}
