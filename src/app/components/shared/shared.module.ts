import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingProgressBarComponent } from './rating-progress-bar/rating-progress-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ImageIconComponent } from './image-icon/image-icon.component';

@NgModule({
  declarations: [
    RatingProgressBarComponent,
    ProgressBarComponent,
    ImageIconComponent,
  ],
  exports: [RatingProgressBarComponent, ImageIconComponent],
  imports: [CommonModule],
})
export class SharedModule {}
