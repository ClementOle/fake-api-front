import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './views/posts/posts.component';
import {SinglePostComponent} from './views/single-post/single-post.component';
import {AddPostComponent} from "./views/add-post/add-post.component";
import {EditPostComponent} from "./views/edit-post/edit-post.component";
import {LoginComponent} from "./views/login/login.component";
import {RegisterComponent} from "./views/register/register.component";
import {AuthGuard} from "./guards/auth/auth.guard";

const routes: Routes = [
  {path: '', canActivate: [AuthGuard], component: PostsComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'posts/add', canActivate: [AuthGuard], component: AddPostComponent},
  {path: 'posts/:id/edit', canActivate: [AuthGuard], component: EditPostComponent},
  {path: 'posts/:id', canActivate: [AuthGuard], component: SinglePostComponent},
  {path: 'posts', canActivate: [AuthGuard], component: PostsComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
