import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.css']
})
export class CardTextComponent {
  @Input() urlImagem: string = '';
}
