import {CoursesComponent} from './courses.componenet';
import {AuthorServiceService} from './author-service.service';
import {CoursesService} from './cources.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { CourceComponent } from './cource/cource.component';
import { AuthorComponent } from './author/author.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourceComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
