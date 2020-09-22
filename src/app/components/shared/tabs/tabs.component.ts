import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pvper-tabs',
  template: `
    <div class="tabs is-toggle is-fullwidth is-large">
      <ul>
        <li class="is-active">
          <a>
            <span>2v2</span>
          </a>
        </li>
        <li>
          <a>
            <span>3v3</span>
          </a>
        </li>
        <li>
          <a>
            <span>RGB</span>
          </a>
        </li>
      </ul>
    </div>
  `,
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
