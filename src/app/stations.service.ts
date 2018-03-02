import { Http } from '@angular/http';
import { DataService } from './services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StationsService extends DataService {

  constructor(http:Http) { 
    super('https://infinite-escarpment-36437.herokuapp.com/stations', http)
  }

}
