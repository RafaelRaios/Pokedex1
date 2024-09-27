import { Component, EventEmitter, Output } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  inputValue: string = "";

  @Output('SearchPokemon') searchPokemonEmmiter = new EventEmitter<string>();

  updateSearch() {
    this.searchPokemonEmmiter.emit(this.inputValue);
  }
}
