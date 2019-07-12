import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
