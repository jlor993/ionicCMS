import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  articles: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  public getArticles(): void{
    this.articleService.getArticles().subscribe(
      (response:any) => {
        this.articles = response.articles;
      }
    );
  }

}
