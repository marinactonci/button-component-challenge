import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[error]'
})
export class ErrorDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement.firstElementChild, 'error');
  }
}
