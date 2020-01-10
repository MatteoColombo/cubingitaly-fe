import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationPanelComponent } from './association-panel.component';

describe('AssociationPanelComponent', () => {
  let component: AssociationPanelComponent;
  let fixture: ComponentFixture<AssociationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
