import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCadastroComponent } from './login/login-cadastro/login-cadastro.component';
import { LoginFormComponent } from './login/login-form/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCadastroComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
