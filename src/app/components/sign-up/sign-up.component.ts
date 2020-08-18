import {
  Component,
  OnInit,
  EventEmitter
} from '@angular/core';
import {
  ApiClient
} from 'src/app/core/auth/ApiClient';
import {
  DataService
} from 'src/app/core/services/data.service';
import {
  User
} from 'src/app/shared/models/User';
import {
  ToastrService
} from 'ngx-toastr';
import {
  Router
} from '@angular/router';
import * as HttpStatus from 'http-status-codes'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  event = new EventEmitter < boolean > ()
  client = new ApiClient()

  constructor(private dataService: DataService,
    private toastr: ToastrService,
    private router: Router) {}

  ngOnInit() {}

  onSignUp(): void {
    this.event.emit(true)
    console.log(this.dataService.map)
    const user = new User()
    const email = this.dataService.map.get('signUpEmail')
    const pass = this.dataService.map.get('signUpPassword')
    const repPass = this.dataService.map.get('signUpRepeatPassword')

    if (email.localeCompare('') === 0) {
      this.toastr.error('Email field is empty')
    } else if (pass.localeCompare('') === 0) {
      this.toastr.error('Password field is empty')
    } else if (repPass.localeCompare('') === 0) {
      this.toastr.error('Repeat password field is empty')
    } else if (pass.localeCompare(repPass) !== 0) {
      this.toastr.error('Passwords do not match')
    } else {
      const user = new User()

      user.email = email
      user.password = pass
      const code = this.generateVerificationCode()
      this.dataService.verificationCode = code
      this.client.registerUser(user, code).subscribe((res) => {
        if (res.status === HttpStatus.OK) {
          this.router.navigate(['verify-email'])
        }
      })
    }
  }

  onSignIn(): void {
    this.router.navigate(['./login'])
  }

  private generateVerificationCode(): string {
    var result = '';
    var characters = '0123456789';
    
    for ( var i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }
}
