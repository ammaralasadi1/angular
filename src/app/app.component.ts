import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // post = {
  //   title: "The book of Kusha",
  //   isFavorite: true
  // }
  // onFavoriteChange(evetArgs) {
  //   console.log('favorite changed', evetArgs);
  // }
  // tweet = {
  //   likeCount: 10,
  //   isLiked: true
  // }
  // cources = [1,2,3]

  // viewMode = '';
  cources;
  // onAdd(){
  //   this.cources.push({ id:4, name: "new cource" + 1 });
  // }
  onChange(cource) {
    let index = this.cources.indexOf(cource);
    this.cources.splice(index, 1);
  }
  loadCources() {
    this.cources = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ]
  }
  trackCource(index,cource){
    return cource ? cource.id: undefined;
  }
}
