import { TestBed } from '@angular/core/testing';

import { PageEditorService } from './page-editor.service';

describe('PageEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageEditorService = TestBed.get(PageEditorService);
    expect(service).toBeTruthy();
  });
});
