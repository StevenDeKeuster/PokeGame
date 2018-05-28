import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { DexComponent } from './dex/dex.component';
import { CompetitorsComponent } from './competitors/competitors.component';

import { PokeapiService } from './services/pokeapi.service';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GameComponent,
    DexComponent,
    CompetitorsComponent,
    TimelineComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: "game", component: GameComponent},
      {path: "timeline", component: TimelineComponent},
      {path: "home", component: HomeComponent},
      {path:"", redirectTo: "home", pathMatch:'full'}
    ], {useHash:true})

  ],
  providers: [
    PokeapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
