import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let router: jasmine.SpyObj<Router>;
  let authService: jasmine.SpyObj<AuthenticationService>;

  beforeEach(async(() => {
    component = new LogoutComponent(authService as AuthenticationService);
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      providers: [
        {provide: Router, useValue: router}
      ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
