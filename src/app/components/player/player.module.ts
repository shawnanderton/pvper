import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlayerComponent } from './player.component';
import { PlayerGearComponent } from './player-gear/player-gear.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [PlayerComponent],
  declarations: [PlayerComponent, PlayerGearComponent],
})
export class PlayerModule {}
