import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpHttpService {

  private signUpURL = "api/profile/";

  constructor(
    private httpClient: HttpClient,
  ) { }

  doSignUp(email: String, password: String) {
    return this.httpClient.post(
      this.signUpURL,
      {
        email,
        password,
      },
      { observe: 'response' }
    )
  }
}
