import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() formSubmitted: EventEmitter<any>;
  @Input() post: Post;

  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.post = new Post('', '');
    this.formSubmitted = new EventEmitter<any>();
  }

  ngOnInit(): void {
    if (!this.post) {
      this.post = new Post('', '');
    }
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      title: new FormControl(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      body: new FormControl(undefined, Validators.required)
    });
  }

  onFormSubmitted() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.post);
    }
  }
}
