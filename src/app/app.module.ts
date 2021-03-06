import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddPostComponent} from './views/add-post/add-post.component';
import {EditPostComponent} from './views/edit-post/edit-post.component';
import {SinglePostComponent} from './views/single-post/single-post.component';
import {PostsComponent} from './views/posts/posts.component';
import {PostFormComponent} from './components/post-form/post-form.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post/post.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ErrorsFormComponent} from "./components/errors-form/errors-form.component";
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {AuthService} from "./services/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    EditPostComponent,
    SinglePostComponent,
    PostsComponent,
    PostFormComponent,
    ErrorsFormComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
