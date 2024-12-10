import { Component } from '@angular/core';

@Component({
  selector: 'app-file-two',
  templateUrl: './file-two.component.html',
  styleUrls: ['./file-two.component.scss']
})
export class FileTwoComponent {
  name: string = "Tanvi";
  calling() {
    console.log("call from parant compo...");
  }
}
