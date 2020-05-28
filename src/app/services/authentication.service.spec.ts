import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { provideRoutes, Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
