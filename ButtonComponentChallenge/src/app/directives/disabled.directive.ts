import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disabled]'
})
export class DisabledDirective implements OnInit {
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement.firstElementChild, 'disabled');
  }
}
