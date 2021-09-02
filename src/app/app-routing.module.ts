import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './views/posts/posts.component';
import {SinglePostComponent} from './views/single-post/single-post.component';
import {AddPostComponent} from "./views/add-post/add-post.component";

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts/add', component: AddPostComponent },
  { path: 'posts/:id', component: SinglePostComponent },
  { path: 'posts', component: PostsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
