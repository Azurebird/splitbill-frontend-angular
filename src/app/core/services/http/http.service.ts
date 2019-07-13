import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  doSignUp() {
    const mockResponse = {
      username: 'camilo',
      password: ''
    }
    return mockResponse;
  }
}
