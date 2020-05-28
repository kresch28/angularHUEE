import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBoxComponent} from './search-box.component';
import {HttpClient} from '@angular/common/http';

describe('SearchBoxComponent', () => {
	let component: SearchBoxComponent;
	let fixture: ComponentFixture<SearchBoxComponent>;
	let httpClient: jasmine.SpyObj<HttpClient>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SearchBoxComponent],
			providers: [
				{ provide: HttpClient, useValue: httpClient },
			],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchBoxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
