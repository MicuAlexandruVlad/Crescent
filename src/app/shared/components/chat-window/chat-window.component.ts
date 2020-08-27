import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/Message';
import { Conversation } from '../../models/Conversation';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  @Input() messages: Array<Message>
  @Input() conversation: Conversation



  constructor() { }

  ngOnInit() {
    console.log(this.conversation)
  }

}
