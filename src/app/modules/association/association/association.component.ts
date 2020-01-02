import { Component, OnInit, OnDestroy } from '@angular/core';
import { TitleManagerService } from 'src/app/services/title-manager.service';
import { MetaManagerService } from 'src/app/services/meta-manager.service';
import { AssociationService } from '../services/association.service';
import { AssociationEditorComponent } from '../../association-editor/association-editor/association-editor.component';
import { AssociationDocumentModel } from 'src/app/models/association-document.model';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit, OnDestroy {

  statuto: AssociationDocumentModel[];
  mozioni: AssociationDocumentModel[];
  verbali: AssociationDocumentModel[];

  ngOnInit(): void {
    this.assSVC.getDocuments().subscribe(res=>{
      console.log(res);
      this.statuto= res.filter((doc:AssociationDocumentModel) => doc.type === 0).sort((a,b)=> a.id-b.id);
      this.mozioni= res.filter((doc:AssociationDocumentModel) => doc.type === 1).sort((a,b)=> a.id-b.id);
      this.verbali= res.filter((doc:AssociationDocumentModel) => doc.type === 2).sort((a,b)=> a.id-b.id);
    });
    this.titleSVC.setTitle("Associazione");
    this.metaSVC.updateMeta("title", "Associazione");
    this.metaSVC.updateMeta("og:title", "Associazione");
    this.metaSVC.updateMeta("description", "Cubing Italy è un’associazione culturale e di promozione sociale senza scopo di lucro e si pone come punto di riferimento per lo speedcubing italiano.");
    this.metaSVC.updateMeta("og:description", "Cubing Italy è un’associazione culturale e di promozione sociale senza scopo di lucro e si pone come punto di riferimento per lo speedcubing italiano.");
  }

  ngOnDestroy(): void {
    this.metaSVC.resetMeta();
  }


  constructor(private titleSVC: TitleManagerService, private metaSVC: MetaManagerService, private assSVC: AssociationService) {
  }
}
