"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatComponent = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var confirm_sign_out_component_1 = require("src/app/shared/components/dialogs/confirm-sign-out/confirm-sign-out.component");
var Conversation_1 = require("src/app/shared/models/Conversation");
var Message_1 = require("src/app/shared/models/Message");
var User_1 = require("src/app/shared/models/User");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(dialog) {
        this.dialog = dialog;
        this.settingsSelected = false;
        this.chatSelected = false;
        this.exploreSelected = false;
        this.settingsPath = '../../../assets/settings_not_active.png';
        this.chatPath = '../../../assets/chat_not_active.png';
        this.explorePath = '../../../assets/explore_not_active.png';
        this.filterValue = '';
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.conversations = new Array();
        this.generateConversation();
        this.generateConversation();
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        var signOutIcon = $('#sign-out');
        // signOutIcon.mouseenter(() => {
        //   signOutIcon.fadeTo('slow', .2, () => {
        //     signOutIcon.attr('src', '../../../assets/logout_active_pale_red.png')
        //   })
        // })
        // .mouseleave(() => {
        //   signOutIcon.fadeTo('slow', .2, () => {
        //     signOutIcon.attr('src', '../../../assets/logout_not_active.png')
        //   })
        // })
        signOutIcon.mouseenter(function () {
            signOutIcon.fadeIn('slow', function () {
                signOutIcon.attr('src', '../../../assets/logout_active_pale_red.png');
            });
        });
        signOutIcon.mouseleave(function () {
            signOutIcon.fadeIn('slow', function () {
                signOutIcon.attr('src', '../../../assets/logout_not_active.png');
            });
        });
    };
    ChatComponent.prototype.onChat = function () {
        this.chatSelected = true;
        this.settingsSelected = false;
        this.exploreSelected = false;
        this.chatPath = '../../../assets/chat_active.png';
        this.settingsPath = '../../../assets/settings_not_active.png';
        this.explorePath = '../../../assets/explore_not_active.png';
    };
    ChatComponent.prototype.onSettigns = function () {
        this.chatSelected = false;
        this.settingsSelected = true;
        this.exploreSelected = false;
        this.settingsPath = '../../../assets/settings_active.png';
        this.chatPath = '../../../assets/chat_not_active.png';
        this.explorePath = '../../../assets/explore_not_active.png';
    };
    ChatComponent.prototype.onExplore = function () {
        this.chatSelected = false;
        this.settingsSelected = false;
        this.exploreSelected = true;
        this.settingsPath = '../../../assets/settings_not_active.png';
        this.chatPath = '../../../assets/chat_not_active.png';
        this.explorePath = '../../../assets/explore_active.png';
    };
    ChatComponent.prototype.onSignOut = function () {
        var dialogRef = this.dialog.open(confirm_sign_out_component_1.ConfirmSignOutComponent, {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ChatComponent.prototype.onConversationSelected = function (selectedIndex) {
        this.conversations[selectedIndex].selected = true;
        for (var i = 0; i < this.conversations.length; i++) {
            if (i != selectedIndex) {
                this.conversations[i].selected = false;
            }
        }
    };
    ChatComponent.prototype.generateConversation = function () {
        var conv = new Conversation_1.Conversation();
        var lastMessage = new Message_1.Message();
        var conversationUser = new User_1.User();
        lastMessage.type = 0;
        lastMessage.data = 'Hi dude, wassup ?';
        lastMessage.timestamp = '23:04';
        conversationUser.firstName = 'Daniel';
        conversationUser.lastName = 'Berg';
        conv.conversationUser = conversationUser;
        conv.lastMessage = lastMessage;
        this.conversations.push(conv);
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.scss']
        })
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
