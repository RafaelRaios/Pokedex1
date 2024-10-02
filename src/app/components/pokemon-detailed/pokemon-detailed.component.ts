import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-detailed',
  templateUrl: './pokemon-detailed.component.html',
  styleUrls: ['./pokemon-detailed.component.scss']
})
export class PokemonDetailedComponent {
  poke: Pokemon = {} as Pokemon;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {
      pokemon: Pokemon,
    }
  ) {}

  ngOnInit() {
    this.poke = this.data.pokemon;
  }
}

