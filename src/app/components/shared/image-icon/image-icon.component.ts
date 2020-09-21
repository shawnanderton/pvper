import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pvper-image-icon',
  template: `
    <img [src]="imagePath" [style.width.px]="48" [style.height.px]="48" />
  `,
})
export class ImageIconComponent implements OnInit {
  @Input() imagePath: string;
  constructor() {}

  ngOnInit(): void {}
}
