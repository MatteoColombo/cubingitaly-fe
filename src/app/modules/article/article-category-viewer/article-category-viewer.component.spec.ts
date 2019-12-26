import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCategoryViewerComponent } from './article-category-viewer.component';

describe('ArticleCategoryViewerComponent', () => {
  let component: ArticleCategoryViewerComponent;
  let fixture: ComponentFixture<ArticleCategoryViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCategoryViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCategoryViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
