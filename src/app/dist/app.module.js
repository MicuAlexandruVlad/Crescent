"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var landing_component_1 = require("./components/landing/landing.component");
var login_component_1 = require("./components/login/login.component");
var animations_1 = require("@angular/platform-browser/animations");
var input_1 = require("@angular/material/input");
var forms_1 = require("@angular/forms");
var input_component_1 = require("./shared/components/input/input.component");
var ngx_toastr_1 = require("ngx-toastr");
var sign_up_component_1 = require("../app/components/sign-up/sign-up.component");
var forgot_password_component_1 = require("./components/forgot-password/forgot-password.component");
var btn_yellow_component_1 = require("./shared/components/btn-yellow/btn-yellow.component");
var verify_email_component_1 = require("./components/verify-email/verify-email.component");
var chat_component_1 = require("./components/chat/chat.component");
var confirm_sign_out_component_1 = require("./shared/components/dialogs/confirm-sign-out/confirm-sign-out.component");
var dialog_1 = require("@angular/material/dialog");
var message_component_1 = require("./shared/components/message/message.component");
var conversation_component_1 = require("./shared/components/conversation/conversation.component");
var conversation_search_pipe_1 = require("./shared/pipes/conversation-search.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                landing_component_1.LandingComponent,
                login_component_1.LoginComponent,
                input_component_1.InputComponent,
                sign_up_component_1.SignUpComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                btn_yellow_component_1.BtnYellowComponent,
                verify_email_component_1.VerifyEmailComponent,
                chat_component_1.ChatComponent,
                confirm_sign_out_component_1.ConfirmSignOutComponent,
                message_component_1.MessageComponent,
                conversation_component_1.ConversationComponent,
                conversation_search_pipe_1.ConversationSearchPipe,
            ],
            entryComponents: [
                confirm_sign_out_component_1.ConfirmSignOutComponent
            ],
            exports: [
                conversation_search_pipe_1.ConversationSearchPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                input_1.MatInputModule,
                dialog_1.MatDialogModule,
                forms_1.FormsModule,
                ngx_toastr_1.ToastrModule.forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true
                }),
            ],
            providers: [{ provide: dialog_1.MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
