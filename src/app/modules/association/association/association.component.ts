import { Component, OnInit, OnDestroy } from '@angular/core';
import { TitleManagerService } from 'src/app/services/title-manager.service';
import { MetaManagerService } from 'src/app/services/meta-manager.service';
import { AssociationService } from '../services/association.service';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
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
