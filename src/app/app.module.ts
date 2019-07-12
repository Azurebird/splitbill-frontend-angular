import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
  ],
  // The set of injectable objects that are available in the injector of this module.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
