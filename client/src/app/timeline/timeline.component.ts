import { Component, OnInit } from '@angular/core';
import { GameapiService, IGameRoot } from '../services/gameapi.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  games: IGameRoot[];
  tabsclasses: string[] = ["", "", "", "", "", "", "", ""];

  constructor(private _service: GameapiService) { }

  ngOnInit() {
    this.getGames();
  }





  getGames() {
    this._service.GetAllGamesInOrder().subscribe(result => {
      this.games = result;

      this.updateTabs(0);
    });
  }

  getGamesByGeneration(generation: string) {
    this._service.GetAllGamesInOrder(generation).subscribe(result => {
      this.games = result;

      this.updateTabs(+generation);
    });
  }

  test:Date = new Date(123456789);
  test2 = this.test.getFullYear()

  updateTabs(tabNumber: number){
    for (let i = 0; i < this.tabsclasses.length; i++) {
      this.tabsclasses[i] = "";
    }
    this.tabsclasses[tabNumber] = "is-active"; // +i == Number(i)
  }

  getDate(timestamp:string){
    let numtimestamp:number = +timestamp * 1000;
    return new Date(numtimestamp);
  }

}
