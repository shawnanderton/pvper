import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pvper-progress-bar',
  template: `<progress
    class="progress"
    [ngClass]="progressCss"
    [value]="value"
    [max]="max"
  ></progress>`,
})
export class ProgressBarComponent implements OnInit {
  @Input() progressCss = '';
  @Input() value = 0;
  @Input() max = 100;

  constructor() {}

  ngOnInit(): void {
    console.log(this.max);
  }
}
