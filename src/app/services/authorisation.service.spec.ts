import { TestBed } from '@angular/core/testing';

import { AuthorisationService } from './authorisation.service';
import { provideRoutes, Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginService', () => {
  let service: AuthorisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule]
    });
    service = TestBed.inject(AuthorisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
