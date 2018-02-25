import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('is-liked') isLiked:boolean;
  @Input('like-count') likeCount:number;

  onLike($event){
    this.likeCount += (this.likeCount) ? -1: 1;
    this.isLiked = !this.isLiked;

  }

}
