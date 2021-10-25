import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from '../article.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.page.html',
  styleUrls: ['./article-delete.page.scss'],
})
export class ArticleDeletePage implements OnInit {

  article: Article;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.getArticle(params['articleId']);
      }
    );
  }

  deleteArticle(id: string) :void{
    this.articleService.deleteArticle(id).subscribe(
      (response:any)=>{
        if(response.success == true){
          this.router.navigate(['/articles'])
          .then(() => {
            window.location.reload();
          });
        }
      }
    );
  }

  getArticle(id: string): void{
    this.articleService.getArticle(id).subscribe(
      (response:any)=>{
        this.article = response.article;
      }
    );
  }

}
