/**
 * Created by jhouser on 3/30/2017.
 */

/**
 * Created by jhouser on 3/29/2017.
 */

import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';


const routes : Routes = [
/* TODO: Import the relevant components for each relevant app route
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'heroes',     component: HeroesListComponent }*/
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}