import {TestBed} from '@angular/core/testing';

import {FirebaseInitialisationService} from './firebase-initialisation.service';

describe('FirebaseInitialisationService', () => {
	let service: FirebaseInitialisationService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FirebaseInitialisationService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
