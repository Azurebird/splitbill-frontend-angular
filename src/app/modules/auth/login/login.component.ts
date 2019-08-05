import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHttpService } from '@service/http/auth-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  existsError = false;
  errorMessage = '';
  loginForm;

  constructor(
    private signUpHttpService: AuthHttpService,
    private router: Router,
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
    this.signUpHttpService.doSignIn(
      this.loginForm.value['username'],
      this.loginForm.value['password']
    ).subscribe(
      _ => this.onSubmitSuccess(),
      error => this.onSubmitError(error),
    );
  }

  onSubmitSuccess() {
    this.router.navigateByUrl('/home');
  }

  onSubmitError(error) {
    this.errorMessage = error.message;
    this.existsError = true;
  }
}
