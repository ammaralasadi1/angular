import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "The book of Kusha",
    isFavorite: true
  }
  onFavoriteChange(evetArgs){
    console.log('favorite changed', evetArgs);
  }
}
