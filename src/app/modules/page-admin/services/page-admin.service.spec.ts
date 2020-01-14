import { TestBed } from '@angular/core/testing';

import { PageAdminService } from './page-admin.service';

describe('PageAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageAdminService = TestBed.get(PageAdminService);
    expect(service).toBeTruthy();
  });
});
