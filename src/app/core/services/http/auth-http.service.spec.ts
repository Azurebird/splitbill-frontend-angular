import { TestBed } from '@angular/core/testing';

import { AuthHttpService } from './auth-http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthHttpService = TestBed.get(AuthHttpService);
    expect(service).toBeTruthy();
  });
});
