import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CalculatorBodyComponent } from './pages/calculator-body/calculator-body.component';
import { Workshop1Component } from './pages/workshop1/workshop1.component';

const routes: Routes = [ 
  {path: '' , redirectTo: '/home' , pathMatch : 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'workshop1', component: Workshop1Component},
  {path: 'calculator', component: CalculatorBodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
