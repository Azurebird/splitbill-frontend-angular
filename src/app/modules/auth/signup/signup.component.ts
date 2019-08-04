import { HttpService } from '@service/http/http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
    private httpClient: HttpClient,
    private httpService: HttpService,
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
    this.httpClient.post(
      'api/profile/',
      {
        email: this.signupForm.value['username'],
        pass: this.signupForm.value['password'],
      },
      { observe: 'response' }
    ).subscribe(_ => {
      this.router.navigateByUrl('/auth/login');
    }, (error: ServerResponse) => {
      this.errorMessage = error.message;
      this.existsError = true;
    });
  }
}