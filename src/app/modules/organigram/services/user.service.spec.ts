import { TestBed } from '@angular/core/testing';

import {UserService} from "./user.service";
import {AngularFirestore} from '@angular/fire/firestore';


describe('UserService', () => {
	let service: UserService;
	let firestore: jasmine.SpyObj<AngularFirestore>;

	beforeEach(() => {
		firestore = jasmine.createSpyObj('firestore', ['collection']);
		service = new UserService(firestore as AngularFirestore);

		TestBed.configureTestingModule({
			declarations: [UserService]
		});
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
