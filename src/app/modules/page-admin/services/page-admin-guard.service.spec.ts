import { TestBed } from '@angular/core/testing';

import { PageAdminGuardService } from './page-admin-guard.service';

describe('PageAdminGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageAdminGuardService = TestBed.get(PageAdminGuardService);
    expect(service).toBeTruthy();
  });
});
