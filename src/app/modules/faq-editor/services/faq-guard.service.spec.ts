import { TestBed } from '@angular/core/testing';

import { FaqGuardService } from './faq-guard.service';

describe('FaqGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaqGuardService = TestBed.get(FaqGuardService);
    expect(service).toBeTruthy();
  });
});
