import {CommentModel} from './comment.model';

export class Post {

  private _id: number;
  private _title: string;
  private _body: string;
  private _comments: Array<CommentModel>;

  constructor(title: string, body: string, comments?: Array<CommentModel>, id?: number) {
    // 0 && 1 === false && true
    if(typeof id === 'number') {
      this._id = id;
    }

    if(comments) {
      this._comments = comments;
    }

    this._title = title;
    this._body = body;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }

  get comments(): Array<CommentModel> {
    return this._comments;
  }

  set comments(value: Array<CommentModel>) {
    this._comments = value;
  }

  /**
   * Serializer
   */
  toJSON(): any {
    return {
      id: this.id,
      title: this.title,
      body: this.body
    }
  }

  /**
   * Deserializer
   */
  static fromJSON(postAsJSON: any): Post {

    let comments = null;

    if(postAsJSON.comments) {
      comments = postAsJSON.comments.map((comment: any) => CommentModel.fromJSON(comment));
    }

    return new Post(
      postAsJSON.title,
      postAsJSON.body,
      comments,
      postAsJSON.id
    );
  }

}
