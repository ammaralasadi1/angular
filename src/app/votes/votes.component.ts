import { NotFoundError } from './../common/not-found-error';
import { VotesService } from './../votes.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  votes:any[]
  constructor(private service: VotesService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(votes => this.votes = votes);
  }

  
}
