import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }  from './app.component';

import { AppRoutingModule }     from '../nav/routing.module';


@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent],
  providers : [{provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
