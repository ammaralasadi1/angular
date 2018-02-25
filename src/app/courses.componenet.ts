import { CoursesService } from './cources.service';
import { Component } from '@angular/core';
@Component({
  selector: 'cources',
  template: `
  <h2> {{ title }}</h2>
  <ul>
    <li *ngFor="let course of courses">
    {{ course }}
    </li>
  </ul>
  <div (click)="onDIvClick()">
  <button class="btn btn-primary" type="button" (click)="onSave($event)">Save</button>
  </div>
  `


})
export class CoursesComponent {
  title = 'The book of Mormon';
  courses;
  onSave($event){
    $event.stopPropagation();
    console.log("btn clicked", $event)
  }
  onDIvClick(){
    console.log('div clicked');
  }
  constructor(service: CoursesService) {
    this.courses = service.getCources();

  }
}
