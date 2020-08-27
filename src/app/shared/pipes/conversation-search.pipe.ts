import { Pipe, PipeTransform } from '@angular/core';
import { Conversation } from '../models/Conversation';

@Pipe({
  name: 'conversationSearch'
})
export class ConversationSearchPipe implements PipeTransform {

  transform(conversations: Conversation[], filter: string): any {
    return conversations.filter(conv => {
      const fullName = conv.conversationUser.firstName + ' ' + conv.conversationUser.lastName

      if ((fullName.toLowerCase()).includes(filter.toLowerCase())) {
        return true
      }

      return false
    });
  }

}
