import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-sign-out',
  templateUrl: './confirm-sign-out.component.html',
  styleUrls: ['./confirm-sign-out.component.scss']
})
export class ConfirmSignOutComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmSignOutComponent>,
    private router: Router) { }

  ngOnInit() {
  }

  onNo(): void {
    this.dialogRef.close()
  }

  onYes(): void {
    this.dialogRef.close()
    this.router.navigate(['./login'], { replaceUrl: true })
    localStorage.removeItem('token')
  }

}
