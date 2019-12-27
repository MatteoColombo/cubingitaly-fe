import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { PageModel } from 'src/app/models/page.model';
import * as Editor from 'src/assets/ckeditor/ckeditor';
import { MatDialog } from '@angular/material';
import { BadRequestError } from 'src/app/errors/bad.request.error';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { PageEditorService } from '../services/page-editor.service';

@Component({
  selector: 'page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.css']
})
export class PageEditorComponent implements OnInit {

  @Input() pageId: number;
  @Input() titleEditor: boolean = false;
  page: PageModel;
  editor = Editor;

  titleBackup: string;
  contentBackup: string;
  updated:boolean;

  constructor(private dialog: MatDialog, private pageSVC: PageEditorService) { }

  ngOnInit() {
  }

  restore() {
    this.page.content = this.contentBackup;
    this.page.title = this.titleBackup;
  }

  private getPage() {
    this.pageSVC.getPage(this.pageId).subscribe(res => {
      this.page = res;
      this.contentBackup = this.page.content;
      this.titleBackup = this.page.title;
      if (this.page.content === undefined || this.page.content === 'undefined')
        this.page.content = "";
    });
  }

  updatePage() {
    if (this.page.title === "") {
      throw new BadRequestError("È necessario inserire un titolo.");
    }
    else if (this.page.title !== this.titleBackup || this.page.content !== this.contentBackup) {
      if (this.page.isPublic) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          minWidth: '200px',
          data: "Sei sicuro di voler aggiornare la pagina? Le modifiche saranno visibili a chiunque."
        });
        dialogRef.afterClosed().subscribe((res: boolean) => {
          if (res) {
            this.updatePageToServer();
          }
        });
      } else {
        this.updatePageToServer();
      }
    } else {
      this.showUpdateMessage();
      this.scrollToTitle();
    }
  }

  private updatePageToServer() {
    this.pageSVC.updatePage(this.page).subscribe(res => {
      this.page = res;
      this.titleBackup = this.page.title;
      this.contentBackup = this.page.content;
      this.scrollToTitle();
      this.showUpdateMessage();
    });
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes['pageId'].currentValue !== changes['pageId'].previousValue) {
      this.getPage();
    }
  }

  private scrollToTitle() {
    const pageTitle = document.querySelector('.page-title') as HTMLElement;
    pageTitle.scrollIntoView();
  }

  private showUpdateMessage() {
    this.updated = true;
    setTimeout(() => {
      this.updated = false;
    }, (7000));
  }
}