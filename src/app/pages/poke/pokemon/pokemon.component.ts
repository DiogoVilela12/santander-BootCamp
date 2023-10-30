import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from 'src/app/service/pokemonAPI/poke-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {
  param: string = '';

  order: string | undefined;
  name: string | undefined;
  img: string | undefined;

  xpBase: number | undefined;
  height: number | undefined;
  weight: number | undefined;

  abilitys: string[] = [];
  mainColor: string[] = [];
  types: string[] = [];
  moves: string[] = [];

  constructor(private pokeAPI: PokeAPIService,
    private parametrizador: ActivatedRoute) {
  }

  ngOnInit() {
    scrollTo(0, 0)
    this.parametrizador.params.subscribe(
      res => this.param = res['id']
    )

    this.pokeAPI.getPokemonData(this.param).subscribe({
      next: (res) => {
        this.order = this.param.padStart(4, '0');
        this.name = res.name
        this.height = res.height
        this.weight = res.weight
        this.img = res.sprites.other['official-artwork'].front_default
        this.xpBase = res.base_experience

        for (let index = 0; index < res.moves.length; index++) {
          this.moves.push(res.moves[index].move.name)
        }

        for (let index = 0; index < res.abilities.length; index++) {
          this.abilitys.push(res.abilities[index].ability.name)
        }

        for (let index = 0; index < res.types.length; index++) {
          this.types.push(this.pokeAPI.getPokemonTypeInPortuguese(res.types[index].type.name))
          this.mainColor.push(this.pokeAPI.getPokemonTypeColor(res.types[index].type.name))
        }
      },

      error: (err) => {
        console.log(err)
      }
    })
  }

}
