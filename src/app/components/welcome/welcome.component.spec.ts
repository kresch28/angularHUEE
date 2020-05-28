import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WelcomeComponent} from './welcome.component';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from '@angular/router';

describe('WelcomeComponent', () => {
	let component: WelcomeComponent;
	let fixture: ComponentFixture<WelcomeComponent>;
	let router: jasmine.SpyObj<Router>;
	let authService: jasmine.SpyObj<AuthenticationService>;

	beforeEach(async(() => {
		component = new WelcomeComponent(authService as AuthenticationService);
		TestBed.configureTestingModule({
			declarations: [WelcomeComponent],
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
