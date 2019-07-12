import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  signupForm;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.signupForm = this.formBuilder.group({
      username: '',
      password: '',
      repassword: '',
    });
  }

  ngOnInit() {
  }

  onSubmit() {

  }
}
