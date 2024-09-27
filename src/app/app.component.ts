import { Component } from '@angular/core';
import { Pokemon } from './interfaces/pokemon.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokedex';

  selectedPokemon: Pokemon = {} as Pokemon;
  filterCriteria: string = "";

  onSearch(search: string) {
    this.filterCriteria = search;
  }

  onSelectedPokemon(poke: Pokemon) {
    this.selectedPokemon = poke;
  }
}
