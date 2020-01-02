import { Component, OnInit } from '@angular/core';
import { AssociationDocumentModel } from 'src/app/models/association-document.model';
import { AssociationEditorService } from '../services/association-editor.service';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-association-editor',
  templateUrl: './association-editor.component.html',
  styleUrls: ['./association-editor.component.css']
})
export class AssociationEditorComponent implements OnInit {

  showColumns: String[] = ['title', 'type', 'creation', 'update', 'options'];
  documents: AssociationDocumentModel[];
  editing: boolean;
  editingDoc: AssociationDocumentModel;

  constructor(private assSVC: AssociationEditorService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.assSVC.getDocuments().subscribe(res => {
      this.documents = res.sort((a, b) => a.id - b.id);
    });
  }

  edit(doc: AssociationDocumentModel) {
    this.editingDoc = doc;
    this.editing = true;
  }

  done(status: boolean) {
    this.editing = false;
    this.editingDoc = null;
    console.log("what");
    if (status = true) {
      this.getDocuments();
    }
  }

  newDoc() {
    this.editingDoc = null;
    this.editing = true;
  }

  deleteDoc(id: number) {
    let obs = this.createDialog("Sei sicuro di voler cancellare il documento?");
    obs.subscribe((res) => {
      if (res) {
        console.log("deleting");
        this.assSVC.deleteDocument(id).subscribe(()=>this.getDocuments());
      }
    })
  }

  private createDialog(message: string): Observable<any> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      minWidth: '200px',
      data: message
    });

    return dialogRef.afterClosed();
  }
}
