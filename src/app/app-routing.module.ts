import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import { VerifyEmailComponent } from './components/verify-email/verify-email.component'
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [{
  path: 'landing',
  component: LandingComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'sign-up',
  component: SignUpComponent
}, {
  path: 'forgot-password',
  component: ForgotPasswordComponent
}, {
  path: 'verify-email',
  component: VerifyEmailComponent
}, {
  path: 'chat',
  component: ChatComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
