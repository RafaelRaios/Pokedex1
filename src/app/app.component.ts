import { Component } from '@angular/core';
import { Pokemon } from './interfaces/pokemon.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';  // Substitua MatDialog por MatBottomSheet
import { PokemonDetailedComponent } from './components/pokemon-detailed/pokemon-detailed.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokedex';

  selectedPokemon: Pokemon = {} as Pokemon;
  filterCriteria: string = "";
  typeOne: string = "";

  constructor(
    private readonly _matBottomSheet: MatBottomSheet  // Substitua _matDialog por _matBottomSheet
  ) {}

  openPokemonDetails(poke: Pokemon) {
    this.onSelectedPokemon(poke);

    const bottomSheetRef = this._matBottomSheet.open(PokemonDetailedComponent, { // Abra o MatBottomSheet
      data: {
        pokemon: this.selectedPokemon,
      }
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
      console.log('Bottom sheet closed');
    });
  }

  onSearch(search: string) {
    this.filterCriteria = search;
  }

  onSelectedPokemon(poke: Pokemon) {
    this.selectedPokemon = poke;
    console.log(poke);
  }

  onSelectedTypeOne(tipo: string) {
    this.typeOne = tipo;
  }
}
