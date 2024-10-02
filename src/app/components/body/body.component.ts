import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { pokeListResponse } from '../../types/poke-list-response';
import { Pokemons } from '../../types/pokemons';
import { forkJoin, interval, Observable } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  private offset: number = 0;
  private limit: number = 100; // Quantidade de Pokémon a serem carregados por vez
  private totalPokemon: number = 1118; // Total de Pokémon que queremos carregar

  pixel: boolean = true;
  shiny: boolean = false;

  pokemonList: Pokemons = []; // Lista de Pokémon que será atualizada
  filteredPokemonList: Pokemons = [];
  isLoading: boolean = false; // Indicador de carregamento

  @Input() filterCriteria: string = "";
  @Input() typeOne: string = "";

  @Output('onPokemonSelected') onPokemonSelectedEmmit = new EventEmitter<Pokemon>();

  constructor (
    private readonly pokemonservice: PokemonServiceService,
  ) {}

  ngOnInit() {
    // Inicia o carregamento da lista de Pokémon a cada 2 segundos
    this.loadPokemon();
  }

  ngOnChanges() {
    const searchTerm = this.filterCriteria.toLocaleLowerCase()
    this.filteredPokemonList = this.pokemonList.filter(poke => poke.name.includes(searchTerm));
    this.filteredPokemonList = this.filteredPokemonList.filter(poke => poke.types[0].type.name.includes(this.typeOne));
  }

  // Função que inicia a chamada periódica para carregar Pokémon
  loadPokemon() {
    interval(100) // A cada 2 segundos
      .pipe(
        takeWhile(() => this.pokemonList.length < this.totalPokemon), // Continua enquanto não tiver carregado os 1118 Pokémon
        switchMap(() => this.pokemonservice.getPokemonList(this.limit, this.offset)) // Faz a requisição para obter a lista
      )
      .subscribe(data => {
        const pokeList: pokeListResponse = data.results; // Obtemos os resultados da lista
        this.getPokemon(pokeList); // Carregamos os detalhes dos Pokémon da lista
        this.offset += this.limit; // Atualiza o offset para pegar os próximos Pokémon
        this.filteredPokemonList = this.pokemonList;
      });
  }

  goShiny() {
    this.shiny = !this.shiny;
  }
  goPixel() {
    this.pixel = !this.pixel;
  }

  onShinyChange(event: MatSlideToggleChange) {
    this.goShiny();
  }

  onPixelChange(event: MatSlideToggleChange) {
    this.goPixel();
  }

  onPokemonSelected(i: number) {
    //console.log(this.pokemonList[i].name);
    this.onPokemonSelectedEmmit.emit(this.filteredPokemonList[i]);
  }
  // Função que carrega os detalhes dos Pokémon e adiciona na lista
  private getPokemon(list: pokeListResponse) {
    const arr: Observable<Pokemon>[] = [];
  
    list.forEach((value) => {
      arr.push(
        this.pokemonservice.getPokemon(value.name) // Pega o nome de cada Pokémon e chama o serviço
      );
    });
  
    // Usamos o forkJoin para aguardar todas as requisições finalizarem
    forkJoin(arr).subscribe((pokes: Pokemon[]) => {
      this.pokemonList.push(...pokes); // Adiciona os Pokémons recebidos ao array `pokemonList`
    });
  }
}
