import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiveName]'
})
export class DirectiveNameDirective {

  constructor(private ele : ElementRef) {
    console.log('ele',ele);
    
  }

  @HostListener('click') onClick() {
    this.ele.nativeElement.style.color = 'red';
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
  }

  @HostListener('mouseenter') onMousemove() {
    this.ele.nativeElement.style.color ='purple';
  }
  
  @HostListener('mouseout') onMouseout() {
    this.ele.nativeElement.style.color ='red';
  }
}
