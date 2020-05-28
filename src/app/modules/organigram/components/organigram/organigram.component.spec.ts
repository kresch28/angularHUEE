import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { OrganigramComponent } from './organigram.component';
import {AuthenticationService} from "../../../../services/authentication.service";
import {ViewService} from "../../services/view.service";

describe('OrganigramComponent', () => {
  let component: OrganigramComponent;
  let fixture: ComponentFixture<OrganigramComponent>;
  let authService: jasmine.SpyObj<AuthenticationService>;
  let viewService: jasmine.SpyObj<ViewService>;

  beforeEach(async(() => {
    component = new OrganigramComponent(authService as AuthenticationService, viewService as ViewService);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ OrganigramComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
