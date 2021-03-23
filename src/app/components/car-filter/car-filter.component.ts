import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { Brand } from 'src/models/brand';
import { Color } from 'src/models/color';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  brands: Brand[];
  colors: Color[];
  brandFilter: Number;
  colorFilter: Number;
  constructor(private colorService: ColorService,
              private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;

    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;

    });
  }
  getSelectedBrand(brandId: Number) {
    if (this.brandFilter == brandId)
      return true;
    else
      return false;
  }
  getSelectedColor(colorId: Number) {
    if (this.colorFilter == colorId)
      return true;
    else
      return false;
  }
}
