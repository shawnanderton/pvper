import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlayerComponent } from './player.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [PlayerComponent],
  declarations: [PlayerComponent],
})
export class PlayerModule {}
