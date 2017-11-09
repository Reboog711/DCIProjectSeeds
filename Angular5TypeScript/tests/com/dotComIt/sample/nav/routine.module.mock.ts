/**
 * Created by jhouser on 10/6/2017.
 * created to be used as a router module for testing, it is intended to completely replace the routing.module
 */

import { NgModule }      from '@angular/core';
import { Routes }   from '@angular/router';
import { RouterTestingModule }   from '@angular/router/testing';

import {FirstComponent} from "../../../../../src/com/dotComIt/sample/views/first/first.component";
import {SecondComponent} from "../../../../../src/com/dotComIt/sample/views/second/second.component";

const ROUTES : Routes = [
    { path: '', redirectTo: 'first', pathMatch: 'full' },
    { path: 'first',  component: FirstComponent },
    { path: 'second',     component: SecondComponent }
];

@NgModule({
    imports: [ RouterTestingModule.withRoutes(ROUTES) ],
    exports: [ RouterTestingModule ]
})

export class AppRoutingModule {}