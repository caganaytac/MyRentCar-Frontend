import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from 'src/app/models/color';
import { ResponseListModel } from 'src/app/models/responseListModel';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = environment.backend.apiURL
  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ResponseListModel<Color>> {
    let newPath = this.apiUrl + "colors/getall"
    return this.httpClient.get<ResponseListModel<Color>>(newPath)
  }

  add(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + "colors/add"
    return this.httpClient.post<ResponseModel>(newPath, color)
  }
  update(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + "colors/update"
    return this.httpClient.post<ResponseModel>(newPath, color)
  }
  delete(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + "colors/delete"
    return this.httpClient.post<ResponseModel>(newPath, color)
  }
  getById(id: number): Observable<ItemResponseModel<Color>> {
    let newPath = this.apiUrl + "colors/getbyid?id=" + id
    return this.httpClient.get<ItemResponseModel<Color>>(newPath)
  }
}
