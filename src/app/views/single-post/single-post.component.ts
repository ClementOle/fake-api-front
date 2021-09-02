import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {PostService} from '../../services/post/post.service';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params.id;

    this.postService
      .getPostAndComments(id)
      .then(
        (post: Post) => this.post = post
      );

  }

}
