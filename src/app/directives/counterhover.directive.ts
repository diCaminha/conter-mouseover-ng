import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCounterhover]'
})
export class CounterhoverDirective {

  isHover:boolean = false;

  constructor() { }

  @HostBinding('style.border')
  get cssClasses() {
    return this.isHover ? '1px solid red' : '';
  }  

  @HostListener('mouseover')
  mouseOver($event) {
    this.isHover = true;
  }

  @HostListener('mouseleave')
  mouseLeave($event) {
    this.isHover = false;
  }
}
