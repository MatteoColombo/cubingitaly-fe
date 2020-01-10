import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationFormEngComponent } from './association-form-eng.component';

describe('AssociationFormEngComponent', () => {
  let component: AssociationFormEngComponent;
  let fixture: ComponentFixture<AssociationFormEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationFormEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationFormEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
