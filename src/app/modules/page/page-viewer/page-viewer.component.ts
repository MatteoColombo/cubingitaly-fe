import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { PageModel } from 'src/app/models/page.model';
import { PageService } from '../services/page.service';

@Component({
  selector: 'page-viewer',
  templateUrl: './page-viewer.component.html',
  styleUrls: ['./page-viewer.component.css']
})
export class PageViewerComponent implements OnInit, OnChanges {

  @Input() pageId: number;
  @Input() showTitle: boolean = true;
  @Input() smallTitle: boolean = false;
  page: PageModel;

  constructor(private pageSVC: PageService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pageId'].currentValue !== changes['pageId'].previousValue && changes['pageId'].currentValue)
      this.getPage();
  }

  private getPage() {
    this.pageSVC.getPage(this.pageId).subscribe(res => {
      this.page = res;
    });
  }
}
