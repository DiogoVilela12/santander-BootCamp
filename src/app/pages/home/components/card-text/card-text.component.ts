import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.css']
})
export class CardTextComponent {
  @Input() urlImagem: string = '';
  @Input() urlLink: string = '';
  @Input() linkExterno:boolean = false;
  @Input() reverse: string = 'row';
  @Input() bgColor: string = '#e0fcff'
}
