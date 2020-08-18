import Axios, { AxiosResponse } from 'axios'
import { User } from "../../shared/models/User"
import { Observable, observable } from 'rxjs'
import { Subject } from 'rxjs';

export class ApiClient {
    private readonly baseUrl = 'http://192.168.0.19:3000/'
    private readonly regUser = this.baseUrl + 'users/register/'
    private readonly updateUserUrl = this.baseUrl + 'users/update-user/'
    private readonly logIn = this.baseUrl + 'users/login/'

    private axios = Axios.create({
        baseURL: this.baseUrl,
        timeout: 5000
    })
    private authHeader = { 'Authorization': 'Bearer ' + localStorage.getItem('token') }

    authUser(user: User): Subject<any> {
        var eventStream = new Subject()

        this.axios.post(this.logIn, {
            email: user.email,
            password: user.password
        })
        .then((response) => {
            eventStream.next(response)
        })

        return eventStream
    }

    registerUser(user: User, code: string): Subject<any> {
        const eventStream = new Subject()

        this.axios.post(this.regUser, {
            email: user.email,
            password: user.password,
            verificationCode: code
        })
        .then((response) => {
            eventStream.next(response)
        })

        return eventStream
    }

    updateUser(user: User): Subject<any> {
        const eventStream = new Subject()

        this.axios.post(this.updateUserUrl, {
            user: user
        })
        .then((response) => {
            eventStream.next(response)
        })

        return eventStream
    }
}