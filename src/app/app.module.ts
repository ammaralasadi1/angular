import {CoursesComponent} from './courses.componenet';
import {AuthorServiceService} from './author-service.service';
import {CoursesService} from './cources.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { CourceComponent } from './cource/cource.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthorComponent } from './author/author.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourceComponent,
    AuthorComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthorServiceService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
