import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.css']
})
export class CardTextComponent implements OnInit {
  @Input() urlImagem: string = '';
  @Input() urlLink: string = '';
  @Input() linkExterno:boolean = false;
  @Input() reverse: string = 'row';
  @Input() bgColor: string = '#e0fcff'

  ngOnInit() {
    if (window.screen.width <= 768) {
      this.reverse = 'column-reverse'
    }
  }
}
