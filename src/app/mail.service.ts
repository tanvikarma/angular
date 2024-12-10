import {ElementRef, HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService{
  constructor(private ele : ElementRef) { }

  msg(status: string) {
    console.log('your mail has been send sucessfully..',status);
  }

  @HostListener('click') click() {
    console.log('button is clicked');
    this.ele.nativeElement.style.color = 'pink'
  }
}
