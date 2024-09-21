import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input() poke: Pokemon = {} as Pokemon;
  @Input() shiny: boolean = false;
  @Input() pixel: boolean = false;
}
