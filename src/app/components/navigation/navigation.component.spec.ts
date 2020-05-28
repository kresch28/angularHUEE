import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationComponent} from './navigation.component';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";

describe('NavigationComponent', () => {
	let component: NavigationComponent;
	let fixture: ComponentFixture<NavigationComponent>;
	let router: jasmine.SpyObj<Router>;
	let authService: jasmine.SpyObj<AuthenticationService>;

	beforeEach(async(() => {
		component = new NavigationComponent(authService as AuthenticationService);
		TestBed.configureTestingModule({
			declarations: [NavigationComponent],
			providers: [
				{provide: Router, useValue: router},
			]
		})
			.compileComponents();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
