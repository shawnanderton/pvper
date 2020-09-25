import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pvper-tabs',
  template: `
    <div class="tabs is-toggle is-fullwidth is-large">
      <ul>
        <li [class.is-active]="tab === active" *ngFor="let tab of tabs">
          <a (click)="clicked(tab)">{{ tab }}</a>
        </li>
      </ul>
    </div>
  `,
})
export class TabsComponent implements OnInit {
  @Output()
  selected: EventEmitter<string> = new EventEmitter<string>();

  @Input() tabs: any;
  @Input() active = '';

  constructor() {}

  ngOnInit(): void {}

  clicked(tab: string) {
    this.selected.emit(tab);
  }
}
