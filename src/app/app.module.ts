import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorBodyComponent } from './pages/calculator-body/calculator-body.component';
import { CalculatorChildComponent } from './pages/calculator-body/calculator-child/calculator-child.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Workshop1Component } from './pages/workshop1/workshop1.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorBodyComponent,
    CalculatorChildComponent,
    HomeComponent,
    AboutComponent,
    Workshop1Component,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
