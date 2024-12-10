import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{
  // @Input('appHighlight') name: string= '';
  @Input() appHighlight: string = '';

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    // this.element.nativeElement.style.backgroundColor = "blue"
  }
  // @HostBinding('style.backgroundColor') background:string = 'black'
  // @HostBinding('style.color') color:string = 'white'

  // @HostBinding('style') style = { backgroundColor: 'black', color: 'white' };

  @HostBinding('style') style = {backgroundColor: 'orange', color: 'blue'}

  // ngOnChanges() {
  //   // You can now use the appHighlight data here
  //   if (this.appHighlight === 'tanvi') {
  //     this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
  //   }
  // }

  

  // @HostBinding('style.backgroundColor') ())
}
