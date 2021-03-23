import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListWithTableComponent } from './components/brand-list-with-table/brand-list-with-table.component';
import { CarListWithTableComponent } from './components/car-list-with-table/car-list-with-table.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorListWithTableComponent } from './components/color-list-with-table/color-list-with-table.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path: "",component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/list", component:CarListWithTableComponent},
  {path:"brands/list", component:BrandListWithTableComponent},
  {path:"colors/list", component:ColorListWithTableComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/details/:carId",component:CarDetailComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"payment/:rental",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
