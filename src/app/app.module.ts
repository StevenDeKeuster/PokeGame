import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "game", component: GameComponent},
      {path: "home", component: HomeComponent},
      {path:"", redirectTo: "home", pathMatch:'full'}
    ], {useHash:true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
