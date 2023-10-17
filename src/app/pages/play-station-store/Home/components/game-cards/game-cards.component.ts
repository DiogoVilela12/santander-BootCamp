import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent {
  @Input() listaDeImagens: string[] = [];
  contador: number = 0;

}
