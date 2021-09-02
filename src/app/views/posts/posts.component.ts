import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post/post.service';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Array<Post>;

  nbCols: number;
  cols: Array<any>;
  nbRows: number;
  rows: Array<any>;

  constructor(private postService: PostService) {
    this.nbCols = 2;
    this.cols = new Array<any>(this.nbCols).fill(null);
  }

  ngOnInit(): void {

    this.postService
      .getPosts()
      .then((posts: Array<Post>) => {
        this.posts = posts;

        this.nbRows = Math.ceil(this.posts.length / this.nbCols);
        this.rows = new Array<any>(this.nbRows).fill(null);
      });

  }

  getPostIndex(iR: number, iC: number): number {
    return iR * this.nbCols + iC;
  }

  onClickDeletePost(id: number) {

    this.postService
      .deletePost(id)
      .then(() => {
        for (let i = 0; i < this.posts.length - 1; i++) {
          if (this.posts[i].id === id) {
            this.posts.splice(i, 1);
            break;
          }
        }
      });

  }

}
