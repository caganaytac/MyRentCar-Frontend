import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  getItem(key: string) {
    var item = localStorage.getItem(key);
    if (item !== null) {
      var result = JSON.parse(item)
      return result;
    } else {
      return null;
    }
  }

  setItem(key:string, value:string){
    if(this.getItem(key) === null){
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  removeItem(key:string){
    if(this.getItem(key) !== null){
      localStorage.removeItem(key);
    }
  }
}
