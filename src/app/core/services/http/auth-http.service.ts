import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    const options = {
      params: new HttpParams().set('email', email).set('password', password)
    };
    return this.httpClient.post(
      this.URL.signIn, {}, options
    )
  }
}
