import { CoreModule } from './components/core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LeaderboardModule } from './components/leaderboard/leaderboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, LeaderboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
