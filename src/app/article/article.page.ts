import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '../article.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  article: Article;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['articleId']);
      this.getArticle(params['articleId']);
    });
  }

  getArticle(id:string):void {
    this.articleService.getArticle(id).subscribe(
      (response:any)=>{
        console.log(response);
        this.article = response.article;
      }
    );
  }

}
