import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ResponseListModel } from '../models/responseListModel';
import { ResponseModel } from '../models/responseModel';
import { UserCreditScore } from '../models/userCreditScore';

@Injectable({
  providedIn: 'root'
})
export class UserCreditScoreService {

  apiUrl = environment.backend.apiURL + "usercreditscores/"
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ResponseListModel<UserCreditScore>> {
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ResponseListModel<UserCreditScore>>(newPath)
  }

  getById(id: number): Observable<ItemResponseModel<UserCreditScore>> {
    let newPath = this.apiUrl + "getbyid?id=" + id
    return this.httpClient.get<ItemResponseModel<UserCreditScore>>(newPath)
  }

  getByUserId(userId: number): Observable<ItemResponseModel<UserCreditScore>> {
    let newPath = this.apiUrl + "getbyuserid?id=" + userId
    return this.httpClient.get<ItemResponseModel<UserCreditScore>>(newPath)
  }

  add(userCreditScore: UserCreditScore): Observable<ResponseModel> {
    let newPath = this.apiUrl + "add"
    return this.httpClient.post<ResponseListModel<UserCreditScore>>(newPath, userCreditScore)
  }

  update(userCreditScore: UserCreditScore): Observable<ResponseModel> {
    let newPath = this.apiUrl + "update"
    return this.httpClient.post<ResponseListModel<UserCreditScore>>(newPath, userCreditScore)
  }

  delete(userCreditScore: UserCreditScore): Observable<ResponseModel> {
    let newPath = this.apiUrl + "delete"
    return this.httpClient.post<ResponseListModel<UserCreditScore>>(newPath, userCreditScore)
  }
}
