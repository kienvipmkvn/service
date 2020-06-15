import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom2]'
})
export class Custom2Directive {
  @HostBinding('class.open') isOpen: boolean;

  constructor(private ele: ElementRef) { }

  @HostListener('document: click', ['$event']) toggleItem(){
    this.isOpen = this.ele.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
