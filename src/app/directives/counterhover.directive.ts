import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appCounterhover]',
})
export class CounterhoverDirective {
  isHover: boolean = false;

  @Input('appCounterhover')
  cardId: Number;

  @Output()
  mouseoverCounter = new EventEmitter();

  lastId: Number;

  constructor() {}

  @HostBinding('style.border')
  get cssClasses() {
    return this.isHover ? '1px solid red' : '';
  }

  @HostListener('mouseover')
  mouseOver($event) {
    this.isHover = true;
    if (this.lastId != this.cardId) {
      console.log(this.cardId);
      this.lastId = this.cardId;
      this.mouseoverCounter.emit();
    }
  }

  @HostListener('mouseleave')
  mouseLeave($event) {
    this.lastId = null;
    this.isHover = false;
  }
}
