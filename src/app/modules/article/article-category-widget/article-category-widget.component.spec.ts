import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCategoryWidgetComponent } from './article-category-widget.component';

describe('ArticleCategoryWidgetComponent', () => {
  let component: ArticleCategoryWidgetComponent;
  let fixture: ComponentFixture<ArticleCategoryWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCategoryWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCategoryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
