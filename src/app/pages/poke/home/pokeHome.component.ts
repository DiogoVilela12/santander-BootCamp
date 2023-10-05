import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke',
  templateUrl: './pokeHome.component.html',
  styleUrls: ['./pokeHome.component.css'],
})
export class PokeHomeComponent {
  placeHolder: string = '';

  constructor(private router: Router, private render: Renderer2) { }


  ngOnInit() {
    scrollTo(0, 0)
  }

  navigateToPokemon(value: string | undefined) {
    value = value?.toLowerCase()
    this.router.navigate([`/poke/${value}`])
  }
}
