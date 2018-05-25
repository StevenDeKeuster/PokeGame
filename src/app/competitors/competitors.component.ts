import { Component, OnInit } from '@angular/core';
import { PokeapiService, IPokeRoot } from '../services/pokeapi.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.scss']
})
export class CompetitorsComponent implements OnInit {

  pokemon1:IPokeRoot;
  pokemon2:IPokeRoot;
  myRandomPokemon1:number;
  myRandomPokemon2:number;
  myRandomLevel1:number;
  myRandomLevel2:number;
  
  constructor(private _service: PokeapiService) { }

  ngOnInit() {
    this.get2pokemon();
  }

  get2pokemon(){
    this.myRandomPokemon1 = _.random(1,152);
    this.myRandomPokemon2 = _.random(1,152);

    this.myRandomLevel1 = _.random(21,81);
    this.myRandomLevel2 = _.random(this.myRandomLevel1-20,this.myRandomLevel1+20);
    

    this._service.getPokemon1(this.myRandomPokemon1).subscribe(result => {
      this.pokemon1 = result;
      console.log(result.name); //wegdoen na debuggen
      console.log(this.pokemon1.name); //wegdoen na debuggen
   });

    this._service.getPokemon2(this.myRandomPokemon2).subscribe(result => {
      this.pokemon2 = result;
      console.log(result.name); //wegdoen na debuggen
      console.log(this.pokemon2.name); //wegdoen na debuggen
    });
  }

}
