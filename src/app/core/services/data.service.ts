import { Injectable } from '@angular/core';
import { User } from '../../shared/models/User'

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor() { }
  user: User
  map = new Map<string, string>()
  verificationCode: string
}
