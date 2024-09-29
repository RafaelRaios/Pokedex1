import { Component } from '@angular/core';
import { Pokemon } from './interfaces/pokemon.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
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
    private readonly _matDialog: MatDialog
  ) {}

  openPokemonDetails(poke: Pokemon) {
    this.onSelectedPokemon(poke);

    const dialogRef = this._matDialog.open(PokemonDetailedComponent, {
      data: {
        pokemon: this.selectedPokemon,
      }

    })

    dialogRef.afterClosed();
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
