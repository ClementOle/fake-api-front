import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.post = new Post('', '');
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      title: new FormControl(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      body: new FormControl(undefined, Validators.required)
    });
  }

  onFormSubmitted() {

  }
}
