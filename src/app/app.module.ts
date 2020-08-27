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
import { ConfirmSignOutComponent } from './shared/components/dialogs/confirm-sign-out/confirm-sign-out.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MessageComponent } from './shared/components/message/message.component';
import { ConversationComponent } from './shared/components/conversation/conversation.component';
import { ConversationSearchPipe } from './shared/pipes/conversation-search.pipe';
import { ChatWindowComponent } from './shared/components/chat-window/chat-window.component'
 
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
    ConfirmSignOutComponent,
    MessageComponent,
    ConversationComponent,
    ConversationSearchPipe,
    ChatWindowComponent,
  ],
  entryComponents: [
    ConfirmSignOutComponent
  ],
  exports: [
    ConversationSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
