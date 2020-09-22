import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'pvper-header-bar',
  template: `
     <header>
      <nav class="navbar is-primary">
      <pvper-header-bar-brand></pvper-header-bar-brand>
      </nav>
    </header>
  `,
})
export class HeaderBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
