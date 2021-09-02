import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


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
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onFormSubmitted(): void {
    if (this.form.valid) {
      this.authService.register(this.user)
        .then(() => this.router.navigateByUrl("/"))
        .catch((errMsg: string) => this.errMsg = errMsg);
    }
  }
}
