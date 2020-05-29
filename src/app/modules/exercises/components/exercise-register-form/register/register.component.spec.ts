import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterComponent} from './register.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthenticationService} from '../../../../../services/authentication.service';

describe('RegisterComponent', () => {
	let component: RegisterComponent;
	let fixture: ComponentFixture<RegisterComponent>;
	let formBuilder: jasmine.SpyObj<FormBuilder>;
	let activatedRoute: jasmine.SpyObj<ActivatedRoute>;
	let router: jasmine.SpyObj<Router>;
	let authService: jasmine.SpyObj<AuthenticationService>;
	let firestore: jasmine.SpyObj<AngularFirestore>;

	beforeEach(async(() => {

		firestore = jasmine.createSpyObj('firestore', ['collection']);
		// firestore = jasmine.createSpyObj('firestore', ['valueChanges']);
		component = new RegisterComponent(formBuilder as FormBuilder, activatedRoute as ActivatedRoute, authService as AuthenticationService);

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

	/*it('should create', () => {
		expect(component).toBeTruthy();
	});*/
});
