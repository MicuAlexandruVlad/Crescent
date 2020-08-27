export class Message {
    id: string
    senderId: string
    receiverId: string
    // 0 -> text, 1 -> image, 2 -> file, 3 -> video, 4 -> voice 
    type: number
    data: any
    timestamp: string
    senderFullName: string
    sent: boolean
    read: boolean
}