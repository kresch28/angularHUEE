import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramWrapperComponent } from './organigram-wrapper.component';
import {ActivatedRoute} from "@angular/router";
import {ViewService} from "../../services/view.service";
import {UserService} from "../../services/user.service";
import {AuthenticationService} from "../../../../services/authentication.service";

describe('OrganigramWrapperComponent', () => {
  let component: OrganigramWrapperComponent;
  let fixture: ComponentFixture<OrganigramWrapperComponent>;
  let viewService: jasmine.SpyObj<ViewService>;
  let activatedRoute: jasmine.SpyObj<ActivatedRoute>;
  let usersService: jasmine.SpyObj<UserService>;
  let authService: jasmine.SpyObj<AuthenticationService>;

  beforeEach(async(() => {

    component = new OrganigramWrapperComponent(activatedRoute as ActivatedRoute, viewService as ViewService, usersService as UserService, authService)
    TestBed.configureTestingModule({
      declarations: [ OrganigramWrapperComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute}
        ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
