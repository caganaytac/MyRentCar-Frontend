import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/models/brand';

@Component({
  selector: 'app-brand-list-with-table',
  templateUrl: './brand-list-with-table.component.html',
  styleUrls: ['./brand-list-with-table.component.css']
})
export class BrandListWithTableComponent implements OnInit {

  brands:Brand[]
  filterText = ""
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }
}
