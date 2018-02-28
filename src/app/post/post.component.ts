import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];


  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPost()
      .subscribe(response => {
        this.posts = response.json();
      }, error => {
        alert('Un expected eroor occourd');
      });
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = " "
    this.service.createPost(post)
      .subscribe(response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post)
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        } else {
          throw error;
        }
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json())
      });
  }

  deletePost(post) {
    this.service.deletePost(990)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(index)
      },
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post has already been deleted');
         else {
          throw error;
        }
      })
  }

}
