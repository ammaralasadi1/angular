import { Component } from '@angular/core';
@Component({
  selector: 'cources',
  template: `
  <h2> {{ title }}</h2>
  <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
  </ul>
  `


})
export class CoursesComponent {
title = 'The book of Mormon'
courses = ["cours 1", "cours 2", "cours 3", "cours 4"]
}
