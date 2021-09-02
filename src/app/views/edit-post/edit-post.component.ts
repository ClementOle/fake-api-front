import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../models/post.model";
import {PostService} from "../../services/post/post.service";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {

    const id = this.route.snapshot.params.id;

    this.postService.getPost(id).then(post => this.post);

  }

  /**
   * Method called by the output
   * @param post
   */
  editPost(post: Post) {
    this.postService.editPost(post).then((res: any) => {
      this.router.navigate(['posts', post.id]);
    })
  }
}
