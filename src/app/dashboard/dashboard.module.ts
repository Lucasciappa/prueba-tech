import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { MainComponent } from './layouts/main/main.component';
import { ProductComponent } from './layouts/product/product.component';
import { CartComponent } from './layouts/cart/cart.component';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    MainComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule
  ]
})
export class DashboardModule { }
