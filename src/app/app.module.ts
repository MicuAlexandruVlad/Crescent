import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component'
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './shared/components/input/input.component';
import { ToastrModule } from 'ngx-toastr';
import { SignUpComponent } from '../app/components/sign-up/sign-up.component'
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BtnYellowComponent } from './shared/components/btn-yellow/btn-yellow.component'
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    InputComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    BtnYellowComponent,
    VerifyEmailComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
