import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appCustom1]'
})
export class Custom1 implements OnInit{
    @Input('appCustom1') productColor: string;

    @HostBinding('style.backgroundColor') test: string = 'transparent';

    constructor(private ele: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        //this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', 'red');
    }

    @HostListener('mouseenter') testHover(){
        // this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', 'red');
        this.test = this.productColor;
    }
    @HostListener('mouseleave') testLeave(){
        // this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', 'red');
        this.test = 'transparent';
    }
}