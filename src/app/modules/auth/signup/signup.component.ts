import { HttpService } from '@service/http/http.service';
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
    private httpService: HttpService,
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
    console.log(this.httpService.doSignUp());
  }
}