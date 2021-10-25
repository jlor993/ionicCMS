import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from '../article.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.page.html',
  styleUrls: ['./article-create.page.scss'],
})
export class ArticleCreatePage implements OnInit {

  article:Article = new Article();
  errors: any = {};

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
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
    this.articleService.createArticle(this.article).subscribe(
      (response:any) => {
        this.response(response);
      }
    );
  }

}
