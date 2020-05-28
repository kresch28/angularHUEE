import { TestBed } from '@angular/core/testing';

import { ViewService } from './view.service';
import { AuthorisationService } from './authorisation.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { provideRoutes, Routes, RouterModule } from '@angular/router';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('ViewService', () => {
  let viewService: ViewService;
  let service: AuthorisationService;
  let firestore: jasmine.SpyObj<AngularFirestore>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    firestore = jasmine.createSpyObj('firestore', ['collection']);
    // firestore = jasmine.createSpyObj('firestore', ['valueChanges']);
    service = new AuthorisationService(router, firestore as AngularFirestore);

    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule],
      providers: [
        { provide: Router, useValue: router },
      ],
    });
    service = TestBed.inject(AuthorisationService);
  });

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ViewService);
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
