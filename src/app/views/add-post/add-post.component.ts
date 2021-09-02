import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post.model";
import {PostService} from "../../services/post/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addPost(postToAdd: Post) {
    this.postService.addPost(postToAdd).then((res) => {
      console.log(res);
      this.router.navigateByUrl("/");
    });
  }
}
