import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PageModel } from 'src/app/models/page.model';
import { PageService } from '../services/page.service';

@Component({
  selector: 'page-viewer',
  templateUrl: './page-viewer.component.html',
  styleUrls: ['./page-viewer.component.css']
})
export class PageViewerComponent implements OnInit {

  @Input() pageId: number;
  page: PageModel;

  constructor(private pageSVC: PageService) { }

  ngOnInit() {
    this.pageSVC.getPage(this.pageId).subscribe(res => {
      this.page = res;
    });
  }

}
