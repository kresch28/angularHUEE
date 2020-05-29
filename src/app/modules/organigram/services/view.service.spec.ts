import {TestBed} from '@angular/core/testing';

import {ViewService} from './view.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../../services/authentication.service";
import {UserService} from "./user.service";

describe('ViewService', () => {
	let viewService: ViewService;
	let firestore: jasmine.SpyObj<AngularFirestore>;
	let authService: jasmine.SpyObj<AuthenticationService>
	let router: jasmine.SpyObj<Router>;
	let usersService: jasmine.SpyObj<UserService>;

	beforeEach(() => {
		firestore = jasmine.createSpyObj('firestore', ['collection']);
		viewService = new ViewService(firestore as AngularFirestore, authService as AuthenticationService, usersService as UserService)

		TestBed.configureTestingModule({
			declarations: [ViewService]
		});
	});

	/*it('should be created', () => {
	  expect(viewService).toBeTruthy();
	});*/
});
