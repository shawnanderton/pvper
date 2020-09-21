import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pvper-character-card',
  template: `
    <div class="card {{backgroundColor}}">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <pvper-image-icon [imagePath]="imagePath"></pvper-image-icon>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ name }}</p>
            <p class="subtitle is-6">{{ race }}</p>
          </div>
        </div>

        <!--  -->
      </div>
    </div>
  `,
})
export class CharacterCardComponent implements OnInit {
  imagePath: string;
  backgroundColor: string;
  @Input() name: string;
  @Input() characterClass: string;
  @Input() race: string;
  @Input() faction: string;
  constructor() {}

  ngOnInit(): void {
    this.backgroundColor = `has-background-${this.faction.toLowerCase()}-color `;
    const imageName = this.characterClass.toLowerCase().replace(' ', '');
    this.imagePath = `/assets/images/${imageName}.jpg`;
  }
}
