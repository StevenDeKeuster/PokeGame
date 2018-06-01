import { Component, OnInit } from '@angular/core';
import { PokeapiService, IPokeRoot } from '../services/pokeapi.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-dex',
  templateUrl: './dex.component.html',
  styleUrls: ['./dex.component.scss']
})
export class DexComponent implements OnInit {

  pokemonName: string;
  pokemon: IPokeRoot;

  constructor(private _service: PokeapiService) {
    this.pokemonName = "pikachu"
  }

  ngOnInit() {
    this.getPokemon(this.pokemonName)
  }

  
  getPokemon(name){
    this._service.getPokemonByName(name).subscribe(result => {
      this.pokemon = result;
   });
  }

}
