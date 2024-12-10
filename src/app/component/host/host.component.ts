import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements AfterViewInit{  
  @ViewChild('box') box!:ElementRef;

constructor() {}
  ngAfterViewInit(): void {
  }

@HostListener('mouseleave') click() {
  console.log(this.box.nativeElement,'this.ele');
  
  this.box.nativeElement.style.color = 'blue'
}

}
