import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import  { HomeComponent } from './components/home/home.component'
import { CombosComponent } from './components/combos/combos.component';

const routes: Routes = [
  {path:'', component:CombosComponent},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'home', component:HomeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
