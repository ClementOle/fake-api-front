export class CommentModel {

  private _id: number;
  private _name: string;
  private _email: string;
  private _body: string;

  constructor(id: number, name: string, email: string, body: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._body = body;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }

  static fromJSON(commentAsJSON: any): CommentModel {
    return new CommentModel(
      commentAsJSON.id,
      commentAsJSON.name,
      commentAsJSON.email,
      commentAsJSON.body
    );
  }

}
