import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/models/brand';
import { ResponseListModel } from 'src/models/responseListModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = []
  currentBrand: Brand
  emptyBrand:Brand 
  dataLoaded = false

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand
  }

  getCurrentBrand(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data,
        this.dataLoaded = true
    })
  }
  clearCurrentBrand(){
    if(this.currentBrand){
      this.currentBrand = this.emptyBrand
    }
  }
  getAllBrands(){
    if(!this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
