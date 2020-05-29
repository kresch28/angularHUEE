import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrganigramLatestComponent} from './organigram-latest.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthenticationService} from "../../../../services/authentication.service";
import {ViewService} from "../../services/view.service";

describe('OrganigramLatestComponent', () => {
	let component: OrganigramLatestComponent;
	let fixture: ComponentFixture<OrganigramLatestComponent>;
	let firestore: jasmine.SpyObj<AngularFirestore>;
	let viewService: jasmine.SpyObj<ViewService>;
	let authService: jasmine.SpyObj<AuthenticationService>

	beforeEach(async(() => {

		firestore = jasmine.createSpyObj('firestore', ['collection']);
		// firestore = jasmine.createSpyObj('firestore', ['valueChanges']);
		component = new OrganigramLatestComponent(viewService as ViewService, authService as AuthenticationService);

		TestBed.configureTestingModule({
			declarations: [OrganigramLatestComponent]
		})
			.compileComponents();
	}));


	it('Organigram for logged in user should be loaded', () => {
		expect(component.loading).toBeFalse();
	});
});
