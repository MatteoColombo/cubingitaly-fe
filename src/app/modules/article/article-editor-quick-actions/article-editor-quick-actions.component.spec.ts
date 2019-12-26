import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditorQuickActionsComponent } from './article-editor-quick-actions.component';

describe('ArticleEditorQuickActionsComponent', () => {
  let component: ArticleEditorQuickActionsComponent;
  let fixture: ComponentFixture<ArticleEditorQuickActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleEditorQuickActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditorQuickActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
