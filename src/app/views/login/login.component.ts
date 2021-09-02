import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errMsg: string;

  form: FormGroup;

  user: User;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.user = new User('', '', '', '');
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onFormSubmitted(): void {
    if (this.form.valid) {
      this.authService.login(this.user)
        .then(() => this.router.navigateByUrl("/"))
        .catch((errMsg: string) => this.errMsg = errMsg);
    }
  }
}
