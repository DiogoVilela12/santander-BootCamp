import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../../../../service/pokemonAPI/poke-api.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
  static pokeNumber: number = 0;
  order: string | undefined;
  route: string | undefined;
  img: string | undefined;
  name: string | undefined;
  mainColor: string[] = [];
  types: string[] = [];

  constructor(private pokeAPI: PokeAPIService) { }

  ngOnInit() {
    //Definição de Elemento consumido no PokeAPI
    PokeCardComponent.pokeNumber++;
    this.pokeAPI.getPokemonData(PokeCardComponent.pokeNumber).subscribe({

      //Atribuição de paramentros para os cards
      next: (res) => {
        this.order = res.id.toString().padStart(4, '0');
        this.route = res.id.toString();

        this.name = res.name
        this.img = res.sprites.other['official-artwork'].front_default
        this.types.push(this.pokeAPI.getPokemonTypeInPortuguese(res.types[0].type.name))
        this.mainColor.push(this.pokeAPI.getPokemonTypeColor(res.types[0].type.name))

        if (res.types.length > 1) {
          this.types.push(this.pokeAPI.getPokemonTypeInPortuguese(res.types[1].type.name))
          this.mainColor.push(this.pokeAPI.getPokemonTypeColor(res.types[1].type.name))
        }

      },
      error: (err) => {
        console.log(err)
      }
    }
    )
  }

}
