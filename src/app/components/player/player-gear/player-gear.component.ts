import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pvper-player-gear',
  template: `
    <section class="section">
      <article class="media is-success">
        <div class="columns">
          <div class="column is-one-fifth">
            <figure class="image is-64x64">
              <img
                src="https://render-us.worldofwarcraft.com/icons/56/inv_helmet_25.jpg"
                alt="Placeholder image"
              />
              <figcaption class="has-text-centered has-text-weight-bold has-background-success">100</figcaption>
            </figure>
            <figure class="image is-64x64">
              <img
                src="https://render-us.worldofwarcraft.com/icons/56/inv_helmet_25.jpg"
                alt="Placeholder image"
              />
              <figcaption class="has-text-centered has-text-weight-bold has-background-success">100</figcaption>
            </figure>

          </div>
          <div class="column"></div>
          <div class="column is-one-fifth"></div>
        </div>
      </article>
    </section>
  `,
})
export class PlayerGearComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
