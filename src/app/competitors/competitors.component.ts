import { Component, OnInit } from '@angular/core';
import { PokeapiService, IPokeRoot } from '../services/pokeapi.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.scss']
})
export class CompetitorsComponent implements OnInit {

  pokemons: IPokeRoot[] = new Array(2);
  randomNumbers: number[] = new Array(2);
  RandomLevels: number[] = new Array(2);
  totalBasePowers: number[] = new Array(2);
  totalPowers: number[] = new Array(2);
  amountOfCorrect: number = 0;
  amountOfWrong: number = 0;
  message1: string = "";
  message2: string = "Correct guesses: " + this.amountOfCorrect + "   Wrong guesses: " + this.amountOfWrong + ".";

  constructor(private _service: PokeapiService) { }

  ngOnInit() {
    this.get2pokemon();
  }




  get2pokemon() {

    this.RandomLevels[0] = _.random(21, 81);
    this.RandomLevels[1] = _.random(this.RandomLevels[0] - 20, this.RandomLevels[0] + 20);

    for (let i = 0; i <= 1; i++) {
      this.randomNumbers[i] = _.random(1, 152);

      this._service.getPokemonByNumber(this.randomNumbers[i]).subscribe(result => {
        this.pokemons[i] = result;
        this.totalBasePowers[i] = 0;

        for (let j = 0; j < 6; j++) {
          this.totalBasePowers[i] += this.pokemons[i].stats[j].base_stat;
        }

        this.totalPowers[i] = this.totalBasePowers[i] * this.RandomLevels[i];
      });


    }
  }




  guess(myChoise: number, notMyChoice: number) {
    if (this.totalPowers[myChoise] >= this.totalPowers[notMyChoice]) {
      this.amountOfCorrect++;
      this.message1 = "Correct!";
    }
    else {
      this.amountOfWrong++;
      this.message1 = "To bad!";
    }
    this.message2 = "Correct guesses: " + this.amountOfCorrect + "   Wrong guesses: " + this.amountOfWrong + ".";

    this.get2pokemon();
  }

}
