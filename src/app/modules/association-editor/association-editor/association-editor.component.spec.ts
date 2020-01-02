import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationEditorComponent } from './association-editor.component';

describe('AssociationEditorComponent', () => {
  let component: AssociationEditorComponent;
  let fixture: ComponentFixture<AssociationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
