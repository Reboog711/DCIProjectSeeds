// import libraries that Angular requires
// in the main app these are loaded as JS files in the index.html; but some of these specific to testing
import "core-js"
import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";
import "zone.js/dist/proxy";
import "zone.js/dist/sync-test";
import "zone.js/dist/jasmine-patch";
import "zone.js/dist/async-test";
import "zone.js/dist/fake-async-test";

import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

import { AppComponent }  from '../src/com/dotComIt/sample/main/app.component';
import { AppRoutingModule } from './com/dotComIt/sample/nav/routine.module.mock';
import {FirstComponent} from "../src/com/dotComIt/sample/views/first/first.component";
import {SecondComponent} from "../src/com/dotComIt/sample/views/second/second.component";

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

beforeEach(() => {
    TestBed.configureTestingModule({
            imports : [AppRoutingModule],
            declarations: [ AppComponent,FirstComponent,SecondComponent ],
            providers : [{provide: LocationStrategy, useClass:HashLocationStrategy}]
    })
});