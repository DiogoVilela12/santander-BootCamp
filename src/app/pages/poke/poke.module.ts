import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeHomeComponent } from './home/pokeHome.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokeTypeComponent } from './components/poke-type/poke-type.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MorePokeComponent } from './components/more-poke/more-poke.component';

@NgModule({
  declarations: [
    PokeHomeComponent,
    PokemonComponent,
    PokeTypeComponent,
    PokeCardComponent,
    MorePokeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  exports: [

    PokeHomeComponent,
    PokemonComponent
  ]
})
export class PokeModule { }
