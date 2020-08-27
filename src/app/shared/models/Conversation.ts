import { Message } from "./Message"
import { User } from "./User"

export class Conversation {
    id: string
    lastMessage: Message
    conversationUser: User
    unreadMessages: number

    selected = false
}