/**
 * Created by jhouser on 3/30/2017.
 */


import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import {FirstComponent} from "../views/first/first.component";
import {SecondComponent} from "../views/second/second.component";


const ROUTES : Routes = [
    { path: '', redirectTo: 'first', pathMatch: 'full' },
    { path: 'first',  component: FirstComponent },
    { path: 'second',     component: SecondComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    declarations: [ FirstComponent, SecondComponent ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}