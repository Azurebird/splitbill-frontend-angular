import { SignUpHttpService } from '@service/http/sign-up-http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

interface ServerResponse {
  message: string,
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  existsError = false;
  errorMessage = '';
  signupForm;

  constructor(
    private signUpHttpService: SignUpHttpService,
    private formBuilder: FormBuilder,
    private router: Router
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
    this.signUpHttpService.doSignUp(
      this.signupForm.value['username'],
      this.signupForm.value['password']
    ).subscribe(
      _ => this.onSubmitSuccess(),
      error => this.onSubmitError(error),
    );
  }

  onSubmitSuccess() {
    this.router.navigateByUrl('/auth/login');
  }

  onSubmitError(error) {
    this.errorMessage = error.message;
    this.existsError = true;
  }
}