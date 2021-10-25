import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'user/:userId',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'user-edit/:userId',
    loadChildren: () => import('./user-edit/user-edit.module').then( m => m.UserEditPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'user-delete/:userId',
    loadChildren: () => import('./user-delete/user-delete.module').then( m => m.UserDeletePageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'user-create',
    loadChildren: () => import('./user-create/user-create.module').then( m => m.UserCreatePageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'article/:articleId',
    loadChildren: () => import('./article/article.module').then( m => m.ArticlePageModule)
  },
  {
    path: 'article-edit/:articleId',
    loadChildren: () => import('./article-edit/article-edit.module').then( m => m.ArticleEditPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'article-delete/:articleId',
    loadChildren: () => import('./article-delete/article-delete.module').then( m => m.ArticleDeletePageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'article-create',
    loadChildren: () => import('./article-create/article-create.module').then( m => m.ArticleCreatePageModule),
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}