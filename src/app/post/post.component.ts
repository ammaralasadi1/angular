import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

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
      (error: Response) => {
        if (error.status === 404) {
          // this.form.setErrors(errors.json())
        } else {
          alert ('unexpected error happened');
        }
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json())
      },
      error => {
        alert('Un expected eroor occourd');
      })
  }

  deletePost(post) {
    this.service.deletePost(890)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(index)
      },
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post has already been deleted');
         else {
          alert('eroor occourd!')
        }
      })
  }

}
