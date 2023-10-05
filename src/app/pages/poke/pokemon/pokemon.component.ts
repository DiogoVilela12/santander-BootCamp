import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeAPIService } from 'src/app/service/pokemonAPI/poke-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  param: string = '';
  order:string | undefined;
  img: string | undefined;
  name: string | undefined;
  mainColor: string[] = [];
  types: string[] = [];

  constructor(private pokeAPI: PokeAPIService,
    private parametrizador: ActivatedRoute) {    
  }

  ngOnInit() {
    this.parametrizador.params.subscribe(
      res => this.param = res['id']
    )

    this.pokeAPI.getPokemonData(this.param).subscribe({
      next: (res) => {
        this.order = this.param.padStart(4, '0');
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
    })
  }

}
