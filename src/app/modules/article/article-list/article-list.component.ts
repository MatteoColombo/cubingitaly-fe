import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TitleManagerService } from 'src/app/services/title-manager.service';
import { MetaManagerService } from 'src/app/services/meta-manager.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  constructor(private articleSVC: ArticleService, private router: Router
    , private route: ActivatedRoute, private titleSVC: TitleManagerService, private metaSVC: MetaManagerService) { }

  page: number;
  category: string;
  articlesNumber: number;
  articlesPerPage: number = 7;

  ngOnInit() {
    this.titleSVC.setTitle("Articoli");
    this.metaSVC.updateMeta("title", "Articoli");
    this.metaSVC.updateMeta("og:title", "Articoli");
    this.page = Number(this.route.snapshot.paramMap.get("page"));
    if (isNaN(this.page) || this.page < 1) {
      this.page = 1;
    }
    this.category = this.route.snapshot.paramMap.get("category");
    this.updateArticlesCount();

    //we need this for navigate back
    this.router.events.subscribe((event => {
      if (event instanceof NavigationEnd) {
        if (this.category !== this.route.snapshot.paramMap.get("category")) {
          this.category = this.route.snapshot.paramMap.get("category");
          this.page = 1;
          this.updateArticlesCount();
        } else {
          this.page = Number(this.route.snapshot.paramMap.get("page"));
          if (isNaN(this.page) || this.page < 1) {
            this.page = 1;
          }
        }
      }
    }));
  }

  ngOnDestroy() {
    this.metaSVC.resetMeta();
  }

  pageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.router.navigate(['../' + (event.pageIndex + 1)], { relativeTo: this.route });
  }

  categoryChange(category) {
    this.router.navigateByUrl('/articoli/categorie/' + category + '/1');
    this.updateArticlesCount();
  }

  updateArticlesCount() {
    this.articleSVC.countPublicArticles(this.category).subscribe(count => {
      this.articlesNumber = count;
      let maxPage = Math.trunc(count / this.articlesPerPage) + 1;
      if (this.page > maxPage) {
        this.page = maxPage;
      }
    });
  }

}