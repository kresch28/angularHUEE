import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import {AuthorisationService} from '../../services/authorisation.service';
import {LoginComponent} from './login.component';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let service: AuthorisationService;
	let fixture: ComponentFixture<LoginComponent>;
	let firestore: jasmine.SpyObj<AngularFirestore>;
	let router: jasmine.SpyObj<Router>;

  beforeEach(async(() => {

	  firestore = jasmine.createSpyObj('firestore', ['collection']);
	  // firestore = jasmine.createSpyObj('firestore', ['valueChanges']);
	  component = new LoginComponent(router as Router);

    TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            declarations: [LoginComponent],
		providers: [
			{ provide: Router, useValue: router },
			{ provide: AngularFirestore, useValue: firestore },
            { provide: AuthorisationService, useValue: service}
		],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
