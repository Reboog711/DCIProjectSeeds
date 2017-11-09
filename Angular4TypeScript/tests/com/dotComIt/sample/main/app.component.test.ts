import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from "../../../../../src/com/dotComIt/sample/main/app.component";
import {Router} from "@angular/router";


describe('AppComponent', function () {
    let appComponent: AppComponent;
    let router: Router;

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            appComponent = TestBed.createComponent(AppComponent).componentInstance;
            router = TestBed.get(Router);
            router.initialNavigation();

        });
    }));

    it('Created', function () {
        expect(appComponent).toBeDefined();
    });
});