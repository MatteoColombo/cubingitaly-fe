import { TestBed } from '@angular/core/testing';

import { AssociationEditorService } from './association-editor.service';

describe('AssociationEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssociationEditorService = TestBed.get(AssociationEditorService);
    expect(service).toBeTruthy();
  });
});
