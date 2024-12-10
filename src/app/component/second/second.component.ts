import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  childData: string = 'Hello from Child data';

  sendDataToParent() {
    console.log('Method called from Parent');
  }
}
