import { Component, EventEmitter, Output } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  inputValue: string = "";
  typeOne:string = "";
  tipos: string[] = [
    "",
    "fire",
    "water",
    "grass",
    "electric",
    "normal",
    "flying",
    "bug",
    "poison",
    "ground",
    "fighting",
    "psychic",
    "rock",
    "ice",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];

  @Output('SearchPokemon') searchPokemonEmmiter = new EventEmitter<string>();
  @Output('typeOne') typeOneEmmiter = new EventEmitter<string>();

  updateSearch() {
    this.searchPokemonEmmiter.emit(this.inputValue);
  }

  updateTypeOne() {
    this.typeOneEmmiter.emit(this.typeOne);
  }

}
