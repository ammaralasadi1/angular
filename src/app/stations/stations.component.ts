import { StationsService } from './../stations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  stations:any [];
  
  constructor(private service :StationsService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(stations => this.stations = stations);
  }

}
