import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssociationDocumentModel } from 'src/app/models/association-document.model';
import { AssociationEditorService } from '../services/association-editor.service';

@Component({
  selector: 'document-uploader',
  templateUrl: './document-uploader.component.html',
  styleUrls: ['./document-uploader.component.css']
})
export class DocumentUploaderComponent implements OnInit, OnChanges {

  @Input() document: AssociationDocumentModel;
  @Output() buttonSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  form: FormGroup;
  file: File;
  isNew: boolean = true;

  constructor(private assSVC: AssociationEditorService) { }

  ngOnInit() {
    this.setForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['document'].currentValue !== changes['document'].previousValue) {
      this.setForm();
    }
  }

  setForm(){
    if (this.document && this.document.id) {
      this.isNew = false;
      this.file = null;
      this.form = new FormGroup({
        "title": new FormControl(this.document.title, [Validators.required,Validators.pattern(/^[a-zA-Z\à\è\é\ì\ò\ù\À\È\É\Ì\Ò\Ù]+[a-zA-Z0-9\à\è\é\ì\ò\ù\À\È\É\Ì\Ò\Ù\_\-\.\\\/\s]+[a-zA-Z0-9\à\è\é\ì\ò\ù\À\È\É\Ì\Ò\Ù]+$/)]),
        "type": new FormControl(this.document.type.toString(), [Validators.required])
      });
    } else {
      this.document = new AssociationDocumentModel();
      this.isNew = true;
      this.file = null;
      this.form = new FormGroup({
        "title": new FormControl('', [Validators.required]),
        "type": new FormControl('', [Validators.required])
      });
    }
  }

  onFileInput(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }

  onSave() {
    if (this.form.valid) {
      let document: AssociationDocumentModel = new AssociationDocumentModel();
      document= this.form.value;
      if(!this.isNew){
        document.id=this.document.id;
        if(this.file){
          this.assSVC.updateDocument(document,this.file).subscribe((res)=> this.buttonSelected.emit(true));
        }else{
          this.assSVC.updateDocument(document).subscribe(()=> this.buttonSelected.emit(true));
        }
      }else{
        this.assSVC.createDocument(document, this.file).subscribe((res)=> this.buttonSelected.emit(true));
      }
    }
  }

  onCancel() {
    this.buttonSelected.emit(false);
  }
}
