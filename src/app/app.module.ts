import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './views/add-post/add-post.component';
import { EditPostComponent } from './views/edit-post/edit-post.component';
import { SinglePostComponent } from './views/single-post/single-post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    EditPostComponent,
    SinglePostComponent,
    PostFormComponent,
    ErrorsFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
