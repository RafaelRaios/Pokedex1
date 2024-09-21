import { Component } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { pokeListResponse } from '../../types/poke-list-response';
import { Pokemons } from '../../types/pokemons';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'] // Corrigido de 'styleUrl' para 'styleUrls'
})
export class BodyComponent {
  private offset: number = 0;

  pokemon: Pokemon = {} as Pokemon;
  pokemonList: Pokemons = [];
  pokeList: pokeListResponse = [];

  constructor (
    private readonly pokemonservice: PokemonServiceService,
  ) {}

  ngOnInit() {
    // Exemplo de como pegar um único Pokémon (pikachu)
    this.pokemonservice.getPokemon('pikachu').subscribe(data => {
      this.pokemon = data;
    });

    // Obtemos a lista de Pokémon, e só após a resposta chamamos a função para obter os detalhes
    this.pokemonservice.getPokemonList(100, 0).subscribe(data => {
      this.pokeList = data.results; // Popula a lista de Pokémon com os resultados da API
      this.getPokemon(this.pokeList); // Chama o método para obter os detalhes após ter os resultados
    });
  }

  private getPokemon(list: pokeListResponse) {
    // Inicializamos um array de observables de Pokémon
    const arr: Observable<Pokemon>[] = [];
  
    // Mapeamos a lista de Pokémons e criamos um array de observables, um para cada Pokémon
    list.forEach((value) => {
      arr.push(
        this.pokemonservice.getPokemon(value.name) // Pega o nome de cada Pokémon e chama o serviço
      );
    });
  
    // Usamos o forkJoin para aguardar todas as requisições finalizarem
    forkJoin(arr).subscribe((pokes: Pokemon[]) => {
      this.pokemonList.push(...pokes); // Adiciona os Pokémons recebidos ao array `pokemonList`
      this.offset += 100; // Atualiza o offset para a próxima requisição, se necessário
      // this.isLoading = false; // Aqui você pode parar algum indicador de loading
    });
  }
}
