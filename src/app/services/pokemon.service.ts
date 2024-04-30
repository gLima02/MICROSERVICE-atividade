import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private mockableURL ="http://demo8304640.mockable.io/"
  constructor(private http: HttpClient) { 
  }

  estados:Pokemon[] = [];

  listar():Observable<Pokemon[]>{
  
    return this.http.get<Pokemon[]>(this.mockableURL) as Observable<Pokemon[]>;
  } 
}
