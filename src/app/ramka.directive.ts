import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRamka]',
  standalone: false
})
export class RamkaDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.border = '2px solid green';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = 'none';
  }

}
