import {TestBed} from '@angular/core/testing';

import {SearchService} from './search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchService', () => {
	let service: SearchService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [],
			imports: [HttpClientTestingModule],
			providers: [SearchService]
		});
		service = TestBed.get(SearchService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
