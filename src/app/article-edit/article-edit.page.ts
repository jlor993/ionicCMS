import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from '../article.service';
import { Article } from '../article.model'; 

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.page.html',
  styleUrls: ['./article-edit.page.scss'],
})
export class ArticleEditPage implements OnInit {

  article: Article;
  errors: any = {};

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getArticle(params['articleId']);
    });
  }

  response(response): void{

    if(response.success===true){
      this.router.navigate(['/articles'])
      .then(() => {
        window.location.reload();
      });
    }
  }

  onSubmit(): void{
    this.articleService.updateArticle(this.article).subscribe(
      (response:any) => {
        this.response(response);
      }
    );
  }

  getArticle(id:string):void {
    this.articleService.getArticle(id).subscribe(
      (response:any)=>{
        this.article = response.article;
      }
    );
  }

}
