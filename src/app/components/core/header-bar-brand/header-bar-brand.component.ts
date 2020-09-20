import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pvper-header-bar-brand',
  template: `
    <div class="navbar-brand">
      <a
        class="navbar-item"
        routerLink="/"
        routerLinkActive="router-link-active"
      >
        <span class="brand-blue">P</span>
        <span class="brand-white">v</span>
        <span class="brand-red">P</span>
        <span class="brand-white">er.io</span>
      </a>
    </div>
  `,
})
export class HeaderBarBrandComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
