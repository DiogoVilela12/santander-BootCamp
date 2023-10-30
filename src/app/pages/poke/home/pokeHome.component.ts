import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MorePokeComponent } from '../components/more-poke/more-poke.component';

@Component({
  selector: 'app-poke',
  templateUrl: './pokeHome.component.html',
  styleUrls: ['./pokeHome.component.css'],
})
export class PokeHomeComponent {
  placeHolder: string = '';

  constructor(private router: Router, private vcr: ViewContainerRef) { }

  ngOnInit() {
    scrollTo(0, 0)
  }

  imprimir() {
    const button = document.getElementById('button');
    const factory = this.vcr.createComponent(MorePokeComponent);
    this.vcr.insert(factory.hostView)
    button?.remove()
  }

  navigateToPokemon(value: string | undefined) {
    value = value?.toLowerCase()
    this.router.navigate([`/poke/${value}`])
  }
}
