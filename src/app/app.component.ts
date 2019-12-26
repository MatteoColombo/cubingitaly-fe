import { Component, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarOpened: boolean = false;
  @ViewChild("sidenav", { static: true }) sidenav: MatSidenav;

  menuUrls: { id: string, text: string, url: string, isSelected: boolean, iconPrefix: string, icon: string, login: boolean }[] = [

    {
      id: "home", text: "home", url: "/", isSelected: false, iconPrefix: "fas", icon: "home", login: false
    },
    {
      id: "about", text: "chi siamo", url: "/chi-siamo", isSelected: false, iconPrefix: "fas", icon: "info-circle", login: false
    },
    {
      id: "articles", text: "articoli", url: "/articoli", isSelected: false, iconPrefix: "far", icon: "newspaper", login: false
    },
    {
      id: "tutorial", text: "tutorial", url: "/tutorial", isSelected: false, iconPrefix: "fas", icon: "book", login: false
    },
    {
      id: 'competitions', text: 'Competizioni', url: "/competizioni", isSelected: false, iconPrefix: "fas", icon: "trophy", login: false
    },
    {
      id: 'faq', text: 'FAQ', url: "/faq", isSelected: false, iconPrefix: "fas", icon: "question", login: false
    },
    {
      id: "contact", text: "contatti", url: "/contatti", isSelected: false, iconPrefix: "fas", icon: "envelope", login: false
    }
  ];

  constructor(public auth: AuthService, private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let slashIndex = event.url.indexOf("/", 1);
        let length = event.url.length;
        if (slashIndex > 0) {
          length = slashIndex;
        }
        let section = event.url.substr(0, length);
        this.menuUrls.forEach((url) => url.isSelected = url.url === section);
      }
    })
  }
}