import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseListModel } from 'src/models/responseListModel';
import { Observable } from 'rxjs';
import { Rental } from 'src/models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  baseUrl = environment.backend.baseURL;
  constructor(private httpClient: HttpClient) { }
  
  getRentals(): Observable<ResponseListModel<Rental>> {
    return this.httpClient.get<ResponseListModel<Rental>>(this.baseUrl + "rentals/getdetails")
  }
}
