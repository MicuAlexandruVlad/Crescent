import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Conversation } from '../../models/Conversation';
 
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  @Input() conversation: Conversation
  
  constructor() { }

  ngOnInit() {
  }

}
