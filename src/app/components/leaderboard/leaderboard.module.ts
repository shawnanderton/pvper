import { LeaderboardGridHeaderComponent } from './leaderboard-grid/leaderboard-grid-header/leaderboard-grid-header.component';
import { LeaderboardGridBodyComponent } from './leaderboard-grid/leaderboard-grid-body/leaderboard-grid-body.component';
import { LeaderboardGridComponent } from './leaderboard-grid/leaderboard-grid.component';
import { AppRoutingModule } from './../../app-routing.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeaderboardComponent } from './leaderboard.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  exports: [RouterModule, LeaderboardComponent],
  declarations: [
    LeaderboardComponent,
    LeaderboardGridComponent,
    LeaderboardGridHeaderComponent,
    LeaderboardGridBodyComponent
  ],
})
export class LeaderboardModule {}
