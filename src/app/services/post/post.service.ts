import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/post.model';
import {map} from 'rxjs/operators';
import {forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  /**
   * Method for retrieve all the posts from the API
   */
  getPosts(): Promise<Array<Post>> {

    // RxJS => AJAX Advanced
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts') // [100 items au format JSON]
      .pipe(
        map((res: any) => {
          return res.map((item: any) => Post.fromJSON(item)); // [100 items au format Post]
        })
      )
      .toPromise();

  }

  /**
   * Method for retrieve a post and his comments by his id
   */
  getPostAndComments(postId: number): Promise<Post> {

    return forkJoin<any>([
      this.http
        .get('https://jsonplaceholder.typicode.com/posts/' + postId),
      this.http
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
    ])
      .pipe(
        map((res: any) => {
          const post = res[0];
          const comments = res[1];

          post.comments = comments;

          return Post.fromJSON(post);
        })
      )
      .toPromise();

  }

  /**
   * Method for add a new post
   * @param postToAdd
   */
  addPost(postToAdd: Post): Promise<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts/', postToAdd.toJSON())
      .toPromise();
  }


  deletePost(postId: number): Promise<any> {

    return this.http
      .delete('https://jsonplaceholder.typicode.com/posts/' + postId)
      .toPromise();

  }

  /**
   * Method for retrieve a post
   * @param id
   */
  getPost(id: number): Promise<Post> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts/' + id)
      .pipe(
        map((postAsJson: any) => Post.fromJSON(postAsJson))
      ).toPromise();
  }

  editPost(postToEdit: Post): Promise<any> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + postToEdit.id, postToEdit.toJSON())
      .toPromise();
  }
}
