import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './components/blog/add-blog/add-blog.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { UserBlogList } from './components/blog/user-blog-list/user-blog-list.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { 
    path: 'blog', 
    component: BlogComponent,
    children: [
      { path: '', component: BlogListComponent },
      { path: 'new', component: AddBlogComponent, canActivate: [AuthGuard] },
      { path: 'myblog', component: UserBlogList, canActivate: [AuthGuard] },
      // { path: ':id/edit', component: AddBlogComponent, canActivate: [AuthGuard] },
      { path: ':id', component: BlogDetailComponent },
    ] 
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component:  SignUpComponent},
  { path: 'page-not-found',  component: PageNotFoundComponent},
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
