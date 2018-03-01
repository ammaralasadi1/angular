import {CoursesComponent} from './courses.componenet';
import {AuthorServiceService} from './author-service.service';
import {CoursesService} from './cources.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { CourceComponent } from './cource/cource.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthorComponent } from './author/author.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostsComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourceComponent,
    AuthorComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthorServiceService,
    PostService,
    {provide:ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
