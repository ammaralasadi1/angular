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
  <button class="btn btn-primary"type="button" name="button" [class.active]="isActive">Save</button>
  `


})
export class CoursesComponent {
  title = 'The book of Mormon';
  isActive = false;
  courses;
  constructor(service: CoursesService) {
    this.courses = service.getCources();

  }
}
