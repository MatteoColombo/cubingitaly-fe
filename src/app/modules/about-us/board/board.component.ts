import { Component, OnInit } from '@angular/core';
import { BoardMember } from '../board-member';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: BoardMember[] = [
    {
      name: "Lorenzo Vigani Poli",
      role: "Presidente",
      pic: "who_viganipoli.png",
      description: [
        "<a href='https://www.worldcubeassociation.org/persons/2007POLI01'>Lorenzo Vigani Poli</a> è il presidente di Cubing Italy.",
        " Ha fondato il movimento italiano, contribuendo attivamente al suo sviluppo nel corso degli anni.",
        "Ha partecipato a più di 100 competizioni WCA, la prima nel 2007, ottenendo 56 record nazionali.",
        "È stato nominato Delegato WCA nel 2009 e ricopre il ruolo di leader del WDC dal 2017, l’organo della WCA che si occupa di verificare se ci siano gravi violazioni al regolamento nelle competizioni di tutto il mondo."
      ]
    },
    {
      name: "Simone Cantarelli",
      role: "Vicepresidente",
      pic: "who_cantarelli.png",
      description: [
        "<a href='https://www.worldcubeassociation.org/persons/2012CANT02'>Simone Cantarelli</a> ricopre il ruolo di vicepresidente di Cubing Italy.",
        "Dopo la sua prima competizione nel 2012, ha partecipato a eventi ufficiali più di 70 volte, in 12 paesi del mondo.",
        " È stato nominato Delegato WCA nel 2017 e da allora si occupa di molto del lavoro programmatico dietro le quinte, in particolare degli aspetti grafici.",
        "Dal 2017 è anche uno dei principali organizzatori dei campionati nazionali."
      ]
    },
    {
      name: "Tommaso Raposio",
      role: "Tesoriere",
      pic: "who_raposio.png",
      description: [
        "<a href='https://www.worldcubeassociation.org/persons/2014RAPO01'>Tommaso Raposio</a> è il tesoriere di Cubing Italy, colui che gestisce e cura le finanze dell’Associazione. ",
        "Dal 2013 partecipa attivamente all’ambiente della community e si avvicina a toccare quota 50 competizioni ufficiali. "]
    },
    {
      name: "Matteo Provasi",
      role: "Segretario",
      pic: "who_provasi.png",
      description: [
        "<a href='https://www.worldcubeassociation.org/persons/2009PROV01'>Matteo Provasi</a>  ricopre il ruolo di segretario di Cubing Italy.",
        "Nel 2009 ha partecipato alla sua prima competizione ed è l’unico ad esserci riuscito, insieme a Lorenzo, a raggiungere e superare la quota di 100 competizioni ufficiali.",
        "Dal 2014 ricopre il ruolo di Delegato WCA. ",
        "Il suo parere è stato centrale per quanto riguarda le decisioni prese all’interno di Cubing Italy nel corso degli anni."
      ]
    },
    {
      name: "Pietro Gasparetto",
      role: "Consigliere",
      pic: "who_gasparetto.png",
      description: [
        "<a href='https://www.worldcubeassociation.org/persons/2016GASP01'>Pietro Gasparetto</a>  ricopre il ruolo di consigliere di Cubing Italy",
        "È il più “giovane” tra i soci fondatori: la sua prima competizione risale al 2016. Questo non gli ha impedito di scalare velocemente le gerarchie nei ranking e nelle responsabilità.",
        "Ha organizzato la competizione italiana con il maggior numero di partecipanti: il campionato nazionale del 2019, grande vanto della nostra associazione."
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}


