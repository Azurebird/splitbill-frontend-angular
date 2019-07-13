import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpService } from '@service/http/http.service';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService
  ]
})
export class AuthModule { }
