import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  token: string;
  authSub: Subscription;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authSub = this.authService.token.subscribe((token: string) => this.token = token);
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  onClickLogout() {
    this.authService.logout()
      .then(() => this.router.navigateByUrl("/signin"));
  }
}
