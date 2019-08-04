import { TestBed } from '@angular/core/testing';

import { SignUpHttpService } from './sign-up-http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignUpHttpService = TestBed.get(SignUpHttpService);
    expect(service).toBeTruthy();
  });
});
