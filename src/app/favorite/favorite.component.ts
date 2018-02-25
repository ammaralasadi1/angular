import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite:boolean;
  @Output('change') click = new EventEmitter;
  changeFav(){
    this.isFavorite = !this.isFavorite;
    this.click.emit({newValue: this.isFavorite});
  }
}
