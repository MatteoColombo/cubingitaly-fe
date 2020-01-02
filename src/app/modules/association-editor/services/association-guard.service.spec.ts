import { TestBed } from '@angular/core/testing';

import { AssociationGuardService } from './association-guard.service';

describe('AssociationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssociationGuardService = TestBed.get(AssociationGuardService);
    expect(service).toBeTruthy();
  });
});
