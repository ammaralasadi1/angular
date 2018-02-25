import {CoursesComponent} from './courses.componenet';
import {CoursesService} from './cources.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { CourceComponent } from './cource/cource.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
