import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rating-progress-bar',
  template: `<pvper-progress-bar
    progressCss="is-pvp-rating"
    value="20"
    max="120"
  ></pvper-progress-bar>`,
})
export class RatingProgressBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
