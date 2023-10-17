import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayStationStoreComponent } from './Home/play-station-store.component';
import { HeaderComponent } from './Home/components/header/header.component';
import { MainCardComponent } from './Home/components/main-card/main-card.component';
import { GameCardsComponent } from './Home/components/game-cards/game-cards.component';



@NgModule({
  declarations: [
    PlayStationStoreComponent,
    HeaderComponent,
    MainCardComponent,
    GameCardsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PlayStationStoreModule { }
