import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  toggle:boolean;

  constructor() { }

  ngOnInit() {
  }
  changeFav(){
    this.toggle = !this.toggle;
  }
}
