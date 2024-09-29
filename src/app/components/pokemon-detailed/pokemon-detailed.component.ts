import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-detailed',
  templateUrl: './pokemon-detailed.component.html',
  styleUrls: ['./pokemon-detailed.component.scss']
})
export class PokemonDetailedComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      pokemon: Pokemon,
    }
  ) {}
}
