import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  private URL = {
    signUp: "api/profile/",
    signIn: "api/login/",
  }

  constructor(
    private httpClient: HttpClient,
  ) { }

  doSignUp(email: string, password: string) {
    return this.httpClient.post(
      this.URL.signUp,
      {
        email,
        password,
      },
      { observe: 'response' }
    )
  }

  doSignIn(email: string, password: string) {
    return this.httpClient.post(
      this.URL.signIn,
      {
        email,
        password,
      },
      { observe: 'response' }
    )
  }
}
