import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  pokemons:Pokemon[] = [];
  pokemonForm: FormGroup = new FormGroup({});
  
    constructor(private pokemonService:PokemonService, private formBuilder: FormBuilder){
     
    }
    
    listar():void{
      //acionada assim que é feita a requisicao
      this.pokemonService.listar().subscribe((listaPokemon
        
      ) => (this.pokemons = listaPokemon));
    }
  
  
    ngOnInit():void{
      this.listar();
    }
}
