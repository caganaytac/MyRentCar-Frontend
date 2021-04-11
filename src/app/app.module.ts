import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorListWithTableComponent } from './components/color-list-with-table/color-list-with-table.component';
import { CarListWithTableComponent } from './components/car-list-with-table/car-list-with-table.component';
import { BrandListWithTableComponent } from './components/brand-list-with-table/brand-list-with-table.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { BrandAddComponent } from './components/brand-list-with-table/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-list-with-table/color-add/color-add.component';
import { MyCarImageAddComponent } from './components/car/car-add/my-car-image-add/my-car-image-add.component';
import { ColorUpdateComponent } from './components/color-list-with-table/color-update/color-update.component';
import { BrandUpdateComponent } from './components/brand-list-with-table/brand-update/brand-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ChangePasswordComponent } from './components/user/profile/change-password/change-password.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { HiddenCreditCardNumberPipe } from './pipes/hidden-credit-card-number.pipe';
import { EditProfilePhotoComponent } from './components/user/profile/edit-profile-photo/edit-profile-photo.component';
import { AddProfilePhotoComponent } from './components/user/profile/add-profile-photo/add-profile-photo.component';
@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    RentalComponent,
    CustomerComponent,
    CarDetailComponent,
    CarFilterPipe,
    ColorFilterPipe,
    BrandFilterPipe,
    ColorListWithTableComponent,
    CarListWithTableComponent,
    BrandListWithTableComponent,
    CarFilterComponent,
    PaymentComponent,
    CarAddComponent,
    CarUpdateComponent,
    BrandAddComponent,
    ColorAddComponent,
    MyCarImageAddComponent,
    ColorUpdateComponent,
    BrandUpdateComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ChangePasswordComponent,
    HiddenCreditCardNumberPipe,
    EditProfilePhotoComponent,
    AddProfilePhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
