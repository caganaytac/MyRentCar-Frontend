import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ResponseListModel } from '../models/responseListModel';
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  tokenModel= this.localStorageService.getItem("token");
  jwtHelper: JwtHelperService = new JwtHelperService();
  apiUrl = environment.backend.apiURL +"users/";

  constructor(private httpClient: HttpClient, private localStorageService:LocalStorageService ) { }
  
  updateUser(user:User){
    let newPath = this.apiUrl+ "update-infos"
    return this.httpClient.post<ItemResponseModel<TokenModel>>(newPath,user);
  }

  deleteUser(user:User): Observable<ResponseModel> {
    let newPath = this.apiUrl+ "delete"
    return this.httpClient.post<ResponseModel>(newPath,user);
  }

  getUsers(): Observable<ResponseListModel<User>>{
    let newPath = this.apiUrl+"getall"
    return this.httpClient.get<ResponseListModel<User>>(newPath);
  }
  getUserById(userId:number):Observable<ItemResponseModel<User>>{
    let newPath = this.apiUrl+"getbyid?id="+userId
    return this.httpClient.get<ItemResponseModel<User>>(newPath);
  }
  getUserId(){
    let userId = parseInt(this.jwtHelper.decodeToken(this.tokenModel?.toString())["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
    return userId;
  }
}
