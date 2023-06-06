import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './layouts/main/main.component';
import { CartComponent } from './layouts/cart/cart.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  {
    path: '',
    component: MainComponent,
    // children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
