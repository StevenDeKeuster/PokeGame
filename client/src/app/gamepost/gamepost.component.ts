import { Component, OnInit } from '@angular/core';
import { GameapiService, IGameRoot, Iconsole } from '../services/gameapi.service';

@Component({
  selector: 'app-gamepost',
  templateUrl: './gamepost.component.html',
  styleUrls: ['./gamepost.component.scss']
})
export class GamepostComponent implements OnInit {


  gameToMake: IGameRoot;
  newGame: IGameRoot;
  day: number = 1;
  month: number = 1;
  year: number = 2000;
  consoles: Iconsole[];
  chosenConsole: Iconsole;
  chosenConsoleName:string;
  



  constructor(private _service: GameapiService) {
    
  }

  ngOnInit() {
    this.gameToMake = {
      Id: null,
      Title: null,
      Releasedate: null,
      BoxImageUrl: null,
      MyConsoleId: null,
      MyConsole: null,
      Generation: null
    }
    this.getAllConsoles();
  }

  generateNewGame() {
    let myDate: Date = new Date(this.year, this.month, this.day);
    this.gameToMake.Releasedate = myDate.getMilliseconds.toString();

    this.getConsoleByName(this.chosenConsoleName);
    this.gameToMake.MyConsole=this.chosenConsole;
    this.gameToMake.MyConsoleId=this.chosenConsole.Id;

    this.postNewGame(this.gameToMake);
    this.getNewGame(this.gameToMake.Title);
  }





  getNewGame(name: string) {
    this._service.GetGameByName(name).subscribe(result => {
      this.newGame = result;
    });
  }

  getAllConsoles() {
    this._service.GetAllGamesConsoles().subscribe(result => {
      this.consoles = result;
    });
  }

  getConsoleByName(name:string){
    this._service.GetConsoleByName(name).subscribe(result => {
      this.chosenConsole = result;
    });
  }

  postNewGame(gameToPost) {
    this._service.PostGame(gameToPost).subscribe(result => {
      this.newGame = result;
    });
  }

  getDate(timestamp:string){
    let numtimestamp:number = +timestamp * 1000;
    return new Date(numtimestamp);
  }

}
