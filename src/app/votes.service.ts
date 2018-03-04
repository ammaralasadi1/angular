import { DataService } from './services/data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VotesService extends DataService{

  constructor(http: Http) {
    super ('http://localhost:3000/api/v1/votes',http)
  }

}
