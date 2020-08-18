import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  @ViewChild('inp') input: ElementRef
  
  // 0 - text, 1 - password, 2 - email
  @Input() inputType: string
  @Input() label: string
  @Input() key: string
  @Input() maxLength: number
  @Input() formEvent = new EventEmitter<boolean>()
  value = ''

  @Output() outEvent = new EventEmitter<Map<string, string>>()


  constructor(private toastr: ToastrService, private dataService: DataService) { }

  ngOnInit() {
    this.formEvent.subscribe((pressed) => {
      if (pressed) {
        // const map = new Map<string, string>()
        // map.set(this.key, this.value)
        // this.outEvent.emit(map)

        this.dataService.map.set(this.key, this.value)
      }
    })
  }


}
