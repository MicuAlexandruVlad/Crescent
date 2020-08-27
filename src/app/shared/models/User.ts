export class User {
    id: string
    firstName: string = ''
    lastName: string  = ''
    email: string
    password: string
    hasPhoto: boolean = false
    verified: boolean = false
    photoId: string = ''

    // 0 -> online, 1 -> offline
    status: number
}