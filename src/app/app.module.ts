import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { CarSummaryComponent } from './components/car-summary/car-summary.component';
import { ColorSummaryComponent } from './components/color-summary/color-summary.component';
import { BrandSummaryComponent } from './components/brand-summary/brand-summary.component';
import { ColorListWithTableComponent } from './components/color-list-with-table/color-list-with-table.component';
import { CarListWithTableComponent } from './components/car-list-with-table/car-list-with-table.component';
import { BrandListWithTableComponent } from './components/brand-list-with-table/brand-list-with-table.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    RentalComponent,
    ColorComponent,
    CustomerComponent,
    BrandComponent,
    CarDetailComponent,
    CarFilterPipe,
    ColorFilterPipe,
    BrandFilterPipe,
    CarSummaryComponent,
    ColorSummaryComponent,
    BrandSummaryComponent,
    ColorListWithTableComponent,
    CarListWithTableComponent,
    BrandListWithTableComponent,
    CarFilterComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,  
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
