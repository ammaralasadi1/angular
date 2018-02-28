import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:any[];


  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPost()
    .subscribe(response =>{
      this.posts = response.json();
    });
  }
  createPost(input: HTMLInputElement){
    let post:any = { title: input.value };
    input.value= " "
    this.service.createPost(post)
    .subscribe(response => {
    post.id = response.json().id;
    this.posts.splice(0,0, post)
    });
  }

  updatePost(post){
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response.json())
    })
  }

  deletePost(post){
    this.service.deletePost(post)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(index)
    })
  }

}
