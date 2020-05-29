import {ComponentFixture, TestBed} from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {provideRoutes, Routes, RouterModule, Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirebaseInitialisationService} from "./firebase-initialisation.service";
import {AngularFireAuth} from "@angular/fire/auth";

describe('LoginService', () => {
  let service: AuthenticationService;
  let fixture: ComponentFixture<AuthenticationService>;
  let firestore: jasmine.SpyObj<AngularFirestore>;
  let initService: jasmine.SpyObj<FirebaseInitialisationService>;
  let router: jasmine.SpyObj<Router>;
  let angularFireAuth: jasmine.SpyObj<AngularFireAuth>;

  beforeEach(() => {
    firestore = jasmine.createSpyObj('firestore', ['collection']);
    service = new AuthenticationService(initService as FirebaseInitialisationService, router as Router, angularFireAuth as AngularFireAuth);

    TestBed.configureTestingModule({
      declarations: [AuthenticationService],
      imports: [RouterModule, RouterTestingModule],
      providers: [
        {provide: Router, useValue: router},
        {provide: AngularFireAuth, useValue: angularFireAuth}
      ]
    })
        .compileComponents();
  });

  /*it('should be created', () => {
    expect(service).toBeTruthy();
  });*/
});
