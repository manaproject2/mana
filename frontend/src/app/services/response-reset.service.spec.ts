import { TestBed } from '@angular/core/testing';

import { ResponseResetService } from './response-reset.service';

describe('ResponseResetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseResetService = TestBed.get(ResponseResetService);
    expect(service).toBeTruthy();
  });
});
