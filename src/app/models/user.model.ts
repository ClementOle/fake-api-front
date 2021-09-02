export class User {

  private _id: number;
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _password: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  constructor(email: string, password: string, firstname: string, lastname: string, id?: number) {
    if (typeof id === 'number') {
      this._id = id;
    }
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    this._password = password;
  }

  /**
   * Serializer
   */
  toJSON(): any {
    return {
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    }
  }

  /**
   * Deserializer
   */
  static fromJSON(userAsJSON: any): User {

    return new User(
      userAsJSON.email,
      userAsJSON.password,
      userAsJSON.firstname,
      userAsJSON.lastname,
      userAsJSON.id
    );
  }
}
