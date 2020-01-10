import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEmailEngComponent } from './confirm-email-eng.component';

describe('ConfirmEmailEngComponent', () => {
  let component: ConfirmEmailEngComponent;
  let fixture: ComponentFixture<ConfirmEmailEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmEmailEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmEmailEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
