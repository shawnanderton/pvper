import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingProgressBarComponent } from './rating-progress-bar/rating-progress-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [RatingProgressBarComponent, ProgressBarComponent],
  exports: [RatingProgressBarComponent],
  imports: [CommonModule],
})
export class SharedModule {}
