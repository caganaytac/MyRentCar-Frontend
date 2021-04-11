import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ResponseListModel } from '../models/responseListModel';
import { ResponseModel } from '../models/responseModel';
import { UserProfilePhoto } from '../models/userProfilePhoto';

@Injectable({
  providedIn: 'root'
})
export class UserProfilePhotoService {

  apiUrl = environment.backend.apiURL +"userprofilephotos/"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ResponseListModel<UserProfilePhoto>>{
    let newPath = this.apiUrl +"getall"
    return this.httpClient.get<ResponseListModel<UserProfilePhoto>>(newPath)
  }

  getById(id:number):Observable<ItemResponseModel<UserProfilePhoto>>{
    let newPath = this.apiUrl + "getbyid?id="+id
    return this.httpClient.get<ItemResponseModel<UserProfilePhoto>>(newPath)
  }
  
  getByUserId(id:number):Observable<ItemResponseModel<UserProfilePhoto>>{
    let newPath = this.apiUrl + "getbyuserid?id="+id
    return this.httpClient.get<ItemResponseModel<UserProfilePhoto>>(newPath)
  }

  add(userProfilePhoto:UserProfilePhoto):Observable<ResponseModel>{
    let newPath = this.apiUrl +"add"
    return this.httpClient.post<ResponseModel>(newPath, userProfilePhoto)
  }

  update(userProfilePhoto:UserProfilePhoto):Observable<ResponseModel>{
    let newPath = this.apiUrl +"update"
    return this.httpClient.post<ResponseModel>(newPath, userProfilePhoto)
  }

  delete(userProfilePhoto:UserProfilePhoto):Observable<ResponseModel>{
    let newPath = this.apiUrl +"delete"
    return this.httpClient.post<ResponseModel>(newPath, userProfilePhoto)
  }
}
