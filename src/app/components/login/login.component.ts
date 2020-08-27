import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../shared/models/User'
import { ApiClient } from '../../core/auth/ApiClient'
import * as HttpStatus from 'http-status-codes'
import { DataService } from '../../core/services/data.service'
import { Router } from '@angular/router';
import { InputComponent } from 'src/app/shared/components/input/input.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string
  password: string
  client = new ApiClient()
  @ViewChild('email') emailComp: InputComponent
  @ViewChild('pass') passComp: InputComponent

  constructor(private toastr: ToastrService,
     private dataService: DataService,
     private router: Router) { }

  ngOnInit() {
  }

  onSignIn(): void {
    this.email = this.emailComp.input.nativeElement.value
    this.password = this.passComp.input.nativeElement.value
    if (this.email.localeCompare('') === 0) {
      this.toastr.error('Email field is empty')
    } else if (this.password.localeCompare('') === 0) {
      this.toastr.error('Password field is empty')
    } else {
      const user = new User()
      user.email = this.email
      user.password = this.password

      this.client.authUser(user).subscribe((res) => {
        if (res.status === HttpStatus.OK) {
          console.log(res)
          const token = res.data.token
          const user = this.getUserData(res.data.user)
          this.dataService.user = user
          localStorage.setItem('token', token)
          this.router.navigate(['./chat'], { replaceUrl: true })
        }
      })
    }
  }

  onForgotPass(): void {
    this.router.navigate(['./forgot-password'])
  }

  onRegister(): void {
    this.router.navigate(['./sign-up'])
  }

  // onValue(map: Map<string, string>): void {
  //   if (map.get('email') !== undefined) {
  //     this.email = map.get('email')
  //     console.log(this.email)
  //   }

  //   if (map.get('password') !== undefined) {
  //     this.password = map.get('password')
  //     console.log(this.password)
  //   }
  // } 

  private getUserData(userData: any): User {
    const user = new User()

    user.email = userData.email
    user.firstName = userData.firstName
    user.lastName = userData.lastName
    user.id = userData._id
    user.photoId = userData.photoId
    user.hasPhoto = userData.hasPhoto

    return user
  }

}
