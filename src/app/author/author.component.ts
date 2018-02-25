import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})

export class AuthorComponent implements OnInit {
  authors;
  constructor(service: AuthorServiceService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
