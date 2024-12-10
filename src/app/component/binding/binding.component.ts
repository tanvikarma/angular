import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { MailService } from 'src/app/mail.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
  // providers: [MailService]
})
export class BindingComponent {
  constructor(private mail: MailService) {}
  @ViewChild('box') changeStyle!: ElementRef;

  send() {
    this.mail.msg('tanvi');
    this.mail.click();
    // this.changeStyle.nativeElement.style.background = 'tomato';
    // this.changeStyle.nativeElement.style.fontSize = '22px';
    // this.changeStyle.nativeElement.style.color = 'white';
  }
}
