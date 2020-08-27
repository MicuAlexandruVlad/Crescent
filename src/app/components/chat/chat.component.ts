import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as $ from 'jquery'
import { MatDialog } from '@angular/material/dialog';
import { ConfirmSignOutComponent } from 'src/app/shared/components/dialogs/confirm-sign-out/confirm-sign-out.component';
import { Conversation } from 'src/app/shared/models/Conversation';
import { Message } from 'src/app/shared/models/Message';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {

  settingsSelected = false
  chatSelected = false
  exploreSelected = false
  settingsPath = '../../../assets/settings_not_active.png'
  chatPath = '../../../assets/chat_not_active.png'
  explorePath = '../../../assets/explore_not_active.png'
  filterValue = ''

  // !!!!! DEBUG ONLY
  conversationSelected = true
  selectedConversation: Conversation

  conversations: Array<Conversation>

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.conversations = new Array()
    
    this.generateConversation('Daniel', 'Berg')
    this.generateConversation('German', 'Guy')
    this.generateConversation('Will', 'Diamonds')
    this.generateConversation('Theter', 'Roman')

    // !!!!! DEBUG ONLY
    this.selectedConversation = this.conversations[0]

  }

  ngAfterViewInit() {
    const signOutIcon = $('#sign-out')
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

    signOutIcon.mouseenter(() => {
      signOutIcon.fadeIn('slow', () => {
        signOutIcon.attr('src', '../../../assets/logout_active_pale_red.png')
      })
    })

    signOutIcon.mouseleave(() => {
      signOutIcon.fadeIn('slow', () => {
        signOutIcon.attr('src', '../../../assets/logout_not_active.png')
      })
    })
    
  }

  onChat(): void {
    this.chatSelected = true
    this.settingsSelected = false
    this.exploreSelected = false
    this.chatPath = '../../../assets/chat_active.png'
    this.settingsPath = '../../../assets/settings_not_active.png'
    this.explorePath = '../../../assets/explore_not_active.png'
  }

  onSettigns(): void {
    this.chatSelected = false
    this.settingsSelected = true
    this.exploreSelected = false
    this.settingsPath = '../../../assets/settings_active.png'
    this.chatPath = '../../../assets/chat_not_active.png'
    this.explorePath = '../../../assets/explore_not_active.png'
  }

  onExplore(): void {
    this.chatSelected = false
    this.settingsSelected = false
    this.exploreSelected = true
    this.settingsPath = '../../../assets/settings_not_active.png'
    this.chatPath = '../../../assets/chat_not_active.png'
    this.explorePath = '../../../assets/explore_active.png'
  }

  onSignOut(): void {
    let dialogRef = this.dialog.open(ConfirmSignOutComponent, {
      width: '500px'
    })

    dialogRef.afterClosed().subscribe(result => {

    })
  }

  onConversationSelected(selectedIndex: number): void {
    this.conversations[selectedIndex].selected = true
    this.selectedConversation = this.conversations[selectedIndex]
    
    if (!this.conversationSelected) {
      this.conversationSelected = true
    }

    for (let i = 0; i < this.conversations.length; i++) {
      if (i != selectedIndex) {
        this.conversations[i].selected = false
      }
    }
  }

  private generateConversation(firstName: string, lastName: string): void {
    const conv = new Conversation()
    const lastMessage = new Message()
    const conversationUser = new User()
    lastMessage.type = 0
    lastMessage.data = 'Hi dude, wassup ?'
    lastMessage.timestamp = '23:04'
    conversationUser.firstName = firstName
    conversationUser.lastName = lastName

    conv.conversationUser = conversationUser
    conv.lastMessage = lastMessage
    this.conversations.push(conv)
  }
}
