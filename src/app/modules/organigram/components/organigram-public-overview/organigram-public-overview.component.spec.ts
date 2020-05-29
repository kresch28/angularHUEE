import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrganigramPublicOverviewComponent} from './organigram-public-overview.component';
import {ViewService} from "../../services/view.service";

describe('OrganigramPublicOverviewComponent', () => {
	let component: OrganigramPublicOverviewComponent;
	let fixture: ComponentFixture<OrganigramPublicOverviewComponent>;
	let viewService: jasmine.SpyObj<ViewService>;

	beforeEach(async(() => {
		component = new OrganigramPublicOverviewComponent(viewService as ViewService);
		TestBed.configureTestingModule({
			declarations: [OrganigramPublicOverviewComponent]
		})
			.compileComponents();
	}));

	it('Overview should be loaded', () => {
		expect(component.loading).toBeFalse();
	});
});
