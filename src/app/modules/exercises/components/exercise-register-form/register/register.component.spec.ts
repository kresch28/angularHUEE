import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterComponent} from './register.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormBuilder, Validator} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthorisationService} from '../../../../../services/authorisation.service';

describe('RegisterComponent', () => {
	let component: RegisterComponent;
	let fixture: ComponentFixture<RegisterComponent>;
	let formBuilder: jasmine.SpyObj<FormBuilder>;
	let activatedRoute: jasmine.SpyObj<ActivatedRoute>;
	let router: jasmine.SpyObj<Router>;
	let authService: jasmine.SpyObj<AuthorisationService>;
	let firestore: jasmine.SpyObj<AngularFirestore>;

	beforeEach(async(() => {

		firestore = jasmine.createSpyObj('firestore', ['collection']);
		// firestore = jasmine.createSpyObj('firestore', ['valueChanges']);
		component = new RegisterComponent(formBuilder as FormBuilder, activatedRoute as ActivatedRoute, authService as AuthorisationService);

		TestBed.configureTestingModule({
			declarations: [RegisterComponent],
			imports: [
				BrowserModule, ReactiveFormsModule, FormsModule, FormBuilder
			],
			providers: [
				{provide: ActivatedRoute, useValue: activatedRoute},
				{provide: Router, useValue: router},
				{provide: FormBuilder, useValue: formBuilder},
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RegisterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
