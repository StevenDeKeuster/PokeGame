import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { DexComponent } from './dex/dex.component';
import { CompetitorsComponent } from './competitors/competitors.component';

import { PokeapiService } from './services/pokeapi.service';
import { GameapiService } from './services/gameapi.service';
import { TimelineComponent } from './timeline/timeline.component';
import { GamepostComponent } from './gamepost/gamepost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GameComponent,
    DexComponent,
    CompetitorsComponent,
    TimelineComponent,
    GamepostComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "game", component: GameComponent},
      {path: "timeline", component: TimelineComponent},
      {path: "gamepost", component: GamepostComponent},
      {path: "home", component: HomeComponent},
      {path:"", redirectTo: "home", pathMatch:'full'}
    ], {useHash:true})

  ],
  providers: [
    PokeapiService,
    GameapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
