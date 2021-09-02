import {Injectable} from '@angular/core';
import {User} from "../../models/user.model";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.token = new BehaviorSubject<string>('');
  }

  /**
   * Method for try to sign in the user
   * @param user
   */
  login(user: User): Promise<any> {
    return new Promise<any>(
      (res, rej) => {
        return this.http.post('https://reqres.in/api/login', user.toJSON())
          .toPromise()
          .then((data: any) => {
            this.token.next(data.token);
            //@ts-ignore
            res();
          })
          .catch(() => {
            rej('Les identifiants sont incorrects');
          })
      }
    );
  }

  /**
   * Method for logout the user
   */
  logout(): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        this.token.next('');
        res();
      }
    )
  }
}
