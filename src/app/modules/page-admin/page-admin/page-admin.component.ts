import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PageAdminService } from '../services/page-admin.service';
import { PageModule } from '../../page/page.module';
import { MatSelectChange } from '@angular/material';
import { TitleManagerService } from 'src/app/services/title-manager.service';
import { MetaManagerService } from 'src/app/services/meta-manager.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit, OnDestroy {

  pages: PageModule[];
  editingPage: number;
  constructor(private paSVC: PageAdminService, private titleSVC:TitleManagerService, private metaSVC:MetaManagerService) { }

  ngOnInit() {
    this.paSVC.getPublicPages().subscribe(res => this.pages = res);
    this.titleSVC.setTitle("Gestione Pagine");
    this.metaSVC.addMeta("robots", "noindex,nofollow");
  }

  ngOnDestroy() {
    this.metaSVC.removeMeta("robots");
  }

  pageChanged(change: MatSelectChange) {
    if (change.value >= 0) {
      this.editingPage = change.value
    } else {
      this.editingPage = null;
    }
  }


}
