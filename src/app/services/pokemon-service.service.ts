import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon/pokemon.interface';
import { Pokemons } from '../types/pokemons';
import { pokeListResponse } from '../types/poke-list-response';

@Injectable({
  providedIn: 'root'
})

export class PokemonServiceService {
  private baseURL = "https://pokeapi.co/api/v2/";

  constructor(
    private readonly _httpClient: HttpClient,
  ) {}

  // Função para obter dados de um Pokémon pelo nome ou ID
  getPokemon(nameOrId: string | number): Observable<Pokemon> {
    return this._httpClient.get<Pokemon>(`${this.baseURL}pokemon/${nameOrId}`);
  }

  // Função para obter uma lista de Pokémon
  getPokemonList(limit: number = 20, offset: number = 0): Observable<any> {
    return this._httpClient.get(`${this.baseURL}pokemon?limit=${limit}&offset=${offset}`);
  }
}
