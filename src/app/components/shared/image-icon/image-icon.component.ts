import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pvper-image-icon',
  template: ` <img [src]="imagePath" /> `,
})
export class ImageIconComponent implements OnInit {
  @Input() imagePath: string;
  constructor() {}

  ngOnInit(): void {}
}
