import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import * as $ from 'jquery';
import * as HttpStatus from 'http-status-codes'
import {
  InputComponent
} from 'src/app/shared/components/input/input.component';
import {
  ToastrService
} from 'ngx-toastr';
import {
  DataService
} from 'src/app/core/services/data.service';
import { ApiClient } from 'src/app/core/auth/ApiClient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit, AfterViewInit {

  @ViewChild('inp1') code1: InputComponent
  @ViewChild('inp2') code2: InputComponent
  @ViewChild('inp3') code3: InputComponent
  @ViewChild('inp4') code4: InputComponent
  @ViewChild('inp5') code5: InputComponent

  client: ApiClient

  constructor(private toastr: ToastrService,
     private dataService: DataService,
     private router: Router) {}

  ngAfterViewInit(): void {
    $('#inp1').keyup((e) => {
      if (e.keyCode != 8 && e.keyCode != 9) {
        $(this.code2.input.nativeElement).focus()
      }
    })

    $('#inp2').keyup((e) => {
      if (e.keyCode != 8 && e.keyCode != 9) {
        $(this.code3.input.nativeElement).focus()
      }
    })

    $('#inp3').keyup((e) => {
      if (e.keyCode != 8 && e.keyCode != 9) {
        $(this.code4.input.nativeElement).focus()
      }
    })

    $('#inp4').keyup((e) => {
      if (e.keyCode != 8 && e.keyCode != 9) {
        $(this.code5.input.nativeElement).focus()
      }
    })

    $('#inp2').keyup((e) => {
      if (e.keyCode === 8) {
        $(this.code1.input.nativeElement).focus()
      }
    })

    $('#inp3').keyup((e) => {
      if (e.keyCode === 8) {
        $(this.code2.input.nativeElement).focus()
      }
    })

    $('#inp4').keyup((e) => {
      if (e.keyCode === 8) {
        $(this.code3.input.nativeElement).focus()
      }
    })

    $('#inp5').keyup((e) => {
      if (e.keyCode === 8) {
        $(this.code4.input.nativeElement).focus()
      }
    })
  }

  ngOnInit() {
    this.client = new ApiClient()
  }

  // I am assuming this works
  onVerify(): void {
    console.log('Verification code: ' + this.dataService.verificationCode)
    if (this.code1.input.nativeElement.value.localeCompare('') === 0 ||
      this.code2.input.nativeElement.value.localeCompare('') === 0 ||
      this.code3.input.nativeElement.value.localeCompare('') === 0 ||
      this.code4.input.nativeElement.value.localeCompare('') === 0 ||
      this.code5.input.nativeElement.value.localeCompare('') === 0) {
      this.toastr.error('One or more fields are empty')
    } else {
        const inputCode = this.code1.input.nativeElement.value +
        this.code2.input.nativeElement.value +
        this.code3.input.nativeElement.value +
        this.code4.input.nativeElement.value +
        this.code5.input.nativeElement.value

        if (inputCode.localeCompare(this.dataService.verificationCode) === 0) {
          this.toastr.success('Codes match')
          this.dataService.user.verified = true
          this.client.updateUser(this.dataService.user).subscribe((res) => {
            if (res.status === HttpStatus.OK) {
              this.router.navigate(['./chat'])
            }
          })
        }
    }
  }
}
