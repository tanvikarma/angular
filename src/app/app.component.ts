import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dummy';
  isshow:boolean = false;
  isVisible:boolean = false;
  isFile:boolean = false;
  isopen:boolean = false;

  toggle() {
    this.isshow = !this.isshow;
    this.isVisible = !this.isVisible;
  }

  toggle1() {
    this.isFile = !this.isFile;
  }

  open() {
    this.isopen = !this.isopen;
  }
}
