import { CoreModule } from './components/core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LeaderboardModule } from './components/leaderboard/leaderboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { PlayerModule } from './components/player/player.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    LeaderboardModule,
    PlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
