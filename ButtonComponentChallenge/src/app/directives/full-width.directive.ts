import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fullWidth]'
})
export class FullWidthDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement.firstElementChild.children[1], 'max-width', '100%');
    this.renderer.setStyle(this.el.nativeElement.firstElementChild.children[1], 'width', '100%');
  }

}
