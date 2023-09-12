import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[multiline]'
})
export class MultilineDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement.firstElementChild.children[1], 'hidden');
    this.renderer.removeClass(this.el.nativeElement.firstElementChild.children[2], 'hidden');
  }
}
