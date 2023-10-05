import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.css']
})
export class PokeTypeComponent {
  @Input() bgColor: string = 'gray';
  @Input() type: string | undefined;
}
