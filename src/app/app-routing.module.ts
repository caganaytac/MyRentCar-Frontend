import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListWithTableComponent } from './components/brand-list-with-table/brand-list-with-table.component';
import { BrandUpdateComponent } from './components/brand-list-with-table/brand-update/brand-update.component';
import { CarListWithTableComponent } from './components/car-list-with-table/car-list-with-table.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorListWithTableComponent } from './components/color-list-with-table/color-list-with-table.component';
import { ColorUpdateComponent } from './components/color-list-with-table/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: "",component:CarComponent},
  
  {path:"cars", component:CarComponent},
  {path:"cars/list", component:CarListWithTableComponent, canActivate:[LoginGuard]},

  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/details/:carId",component:CarDetailComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/update/:carId",component:CarUpdateComponent},

  {path:"brands/list", component:BrandListWithTableComponent, canActivate:[LoginGuard]},
  {path:"brands/update/:brandId", component:BrandUpdateComponent, canActivate:[LoginGuard]},

  {path:"colors/list", component:ColorListWithTableComponent, canActivate:[LoginGuard]},
  {path:"colors/update/:colorId", component:ColorUpdateComponent, canActivate:[LoginGuard]},

  {path:"payment/:rental",component:PaymentComponent, canActivate:[LoginGuard]},

  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},

  {path:"users/:userId/profile",component:ProfileComponent, canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
