import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnChanges {
  @Input() poke: Pokemon = {} as Pokemon;
  @Input() shiny: boolean = false;
  @Input() pixel: boolean = true;


  // Detecta mudanças nos inputs shiny e pixel
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['shiny']) {
      //console.log(`Shiny changed: ${changes['shiny'].currentValue}`);
      // Executar ações específicas ao mudar shiny, se necessário
    }

    if (changes['pixel']) {
      //console.log(`Pixel changed: ${changes['pixel'].currentValue}`);
      // Executar ações específicas ao mudar pixel, se necessário
    }
  }

  goShiny() {
    this.shiny = !this.shiny;
  }

  goPixel() {
    this.pixel = !this.pixel;
  }
}
