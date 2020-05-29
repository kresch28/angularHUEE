import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {OrganigramComponent} from './organigram.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthorisationService} from '../../../../services/authorisation.service';


describe('OrganigramComponent', () => {
	let component: OrganigramComponent;
	let fixture: ComponentFixture<OrganigramComponent>;
	let authService: jasmine.SpyObj<AuthorisationService>;
	let firestore: jasmine.SpyObj<AngularFirestore>;


	beforeEach(async(() => {

		firestore = jasmine.createSpyObj('firestore', ['collection']);
		component = new OrganigramComponent(authService as AuthorisationService);
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [OrganigramComponent],
		})
			.compileComponents();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
