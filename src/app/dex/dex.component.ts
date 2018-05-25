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
    this.pokemonName = "mewtwo"
  }

  ngOnInit() {
    this.getPokemon()
  }

  
  getPokemon(){
    this._service.getPokemonByName(this.pokemonName).subscribe(result => {
      this.pokemon = result;
   });
  }

}
