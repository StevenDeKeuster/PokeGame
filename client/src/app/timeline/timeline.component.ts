import { Component, OnInit } from '@angular/core';
import { GameapiService, IGameRoot } from '../services/gameapi.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  games: IGameRoot[];

  constructor(private _service: GameapiService) { }

  ngOnInit() {
    this.getGames();
  }




  
  getGames(){
    this._service.getAllGamesInOrder().subscribe(result => {
      this.games = result;
   });
  }

  getGamesByGeneration(generation:string){
    this._service.getAllGamesInOrder(generation).subscribe(result => {
      this.games = result;
   });
  }

}
