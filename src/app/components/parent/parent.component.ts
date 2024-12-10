import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  recevedMessage: string = '';
  
  receiveData(message: string) {
    this.recevedMessage = message;
  }

}
