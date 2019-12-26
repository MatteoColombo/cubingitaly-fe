import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { Observable } from 'rxjs';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaManagerService } from 'src/app/services/meta-manager.service';
import { TitleManagerService } from 'src/app/services/title-manager.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-article-admin',
  templateUrl: './article-admin.component.html',
  styleUrls: ['./article-admin.component.css']
})
export class ArticleAdminComponent implements OnInit, OnDestroy {

  articles$: Observable<ArticleModel[]>;
  articlesNumber: number = 0;
  articlesPerPage: number = 15;

  page: number;

  displayedColumns: string[] = ["title", "editor", "update", "status", "options"];

  constructor(private articleSVC: ArticleService, private router: Router, private route: ActivatedRoute, private metaSVC: MetaManagerService, private titleSVC: TitleManagerService) { }

  ngOnInit() {
    this.articleSVC.countAllArticles().subscribe((result: { number: number }) => {
      this.articlesNumber = result.number;
      this.page = Number(this.route.snapshot.paramMap.get("page")) || 1;
      if (this.page > this.articlesNumber / this.articlesPerPage || this.page < 1) {
        this.page = 1;
        this.router.navigate(['../' + this.page], { relativeTo: this.route });
      }
      this.getArticles();
    });
    this.titleSVC.setTitle("Gestione articoli");
    this.metaSVC.addMeta("robots", "noindex,nofollow");
  }

  ngOnDestroy() {
    this.metaSVC.removeMeta("robots");
  }

  private getArticles() {
    this.articles$ = this.articleSVC.getAllArticles(this.articlesPerPage, this.page - 1);
  }

  pageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.getArticles();
    this.router.navigate(['../' + this.page], { relativeTo: this.route });
  }

}