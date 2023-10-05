import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  url: string = 'https://pokeapi.co/api/v2/pokemon/'
  pokemonTypes: string[] = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dark",
    "steel",
    "fairy",
    "dragon",
  ];

  tiposDeElementosPokemon: string[] = [
    "Normal",
    "Fogo",
    "Agua",
    "Elétrico",
    "Grama",
    "Gelo",
    "Lutador",
    "Veneno",
    "Terra",
    "Voador",
    "Psíquico",
    "Inseto",
    "Pedra",
    "Fantasma",
    "Sinistro",
    "aço",
    "Fada",
    "Dragão",
  ];

  typesColor: string[] = [
    "#B6B7A5",
    "#EA9546",
    "#7694CA",
    "#E1E14F",
    "#ABD089",
    "#77C8C5",
    "#E37974",
    "#BD98C2",
    "#C2A056",
    "#7BC6E7",
    "#DA5199",
    "#ACC88E",
    "#C09F56",
    "#8374B5",
    "#8D8887",
    "#B8BACE",
    "#DCB0D4",
    "#7895CA",
  ];

  constructor(private http: HttpClient) { }

  getPokemonData(order: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}${order}`)
  }

  getPokemonTypeColor(type: string):string {
    return this.typesColor[this.pokemonTypes.indexOf(type)]
  }

  getPokemonTypeInPortuguese(type:string):string {
    return this.tiposDeElementosPokemon[this.pokemonTypes.indexOf(type)]
  }
}
