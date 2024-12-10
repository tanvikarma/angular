import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lifecylementhdseg',
  templateUrl: './lifecylementhdseg.component.html',
  styleUrls: ['./lifecylementhdseg.component.scss']
})
export class LifecylementhdsegComponent {
  @Output() setdata = new EventEmitter<string>();

  sentData() {
    this.setdata.emit('hello from child');
  }
}
