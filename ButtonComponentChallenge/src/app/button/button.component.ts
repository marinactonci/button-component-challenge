import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: string = '';
  @Input() color: string = '';
  @Input() size: string = '';
  @Input() startIcon: string = '';
  @Input() endIcon: string = '';
}
