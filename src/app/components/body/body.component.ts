import { Component } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Pokemon } from '../../interfaces/pokemon/pokemon.interface';
import { pokeListResponse } from '../../types/poke-list-response';
import { Pokemons } from '../../types/pokemons';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  pokemon: Pokemon = {} as Pokemon;
  pokemonList: Pokemons = [];
  pokeList: pokeListResponse = [];

  constructor (
    private readonly pokemonservice: PokemonServiceService,
  ) {}

  ngOnInit() {
    this.pokemonservice.getPokemon('pikachu').subscribe(data => {
      this.pokemon = data;
    });

    this.pokemonservice.getPokemonList(10, 0).subscribe(data => {
      this.pokeList = data.results;
    });

    
  }
}
