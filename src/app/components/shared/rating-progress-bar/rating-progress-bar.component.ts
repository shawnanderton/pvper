import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'rating-progress-bar',
  template: ` <div>
      <span class="has-text-success">{{ wins }}</span
      >/<span class="has-text-danger">{{ losses }}</span>
      <span class="is-pulled-right">{{ total }}</span>
    </div>
    <pvper-progress-bar progressCss="is-pvp-rating" value="20" max="120">
    </pvper-progress-bar>`,
})
export class RatingProgressBarComponent implements OnInit {
  total: number = 0;

  @Input() wins = 0;
  @Input() losses = 0;

  constructor() {}

  ngOnInit() {
    this.total = +this.wins + +this.losses;
  }
}
