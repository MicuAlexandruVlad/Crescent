import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-yellow',
  templateUrl: './btn-yellow.component.html',
  styleUrls: ['./btn-yellow.component.scss']
})
export class BtnYellowComponent implements OnInit {

  @Input() text = ''

  constructor() { }

  ngOnInit() {
  }

}
