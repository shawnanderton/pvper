import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pvper-character-card',
  template: `
    <div class="card {{ backgroundColor }}">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img [src]="imagePath" />
            </figure>
          </div>
          <div class="media-content character-name has-right-border">
            <p class="subtitle is-6 has-text-white">{{ title }}</p>
            <p class="title is-4 {{ classTextColor }}">{{ name }}</p>
          </div>
          <div class="media-content character-info">
            <p class="subtitle is-4 has-text-white">{{ itemLevel }} ILVL</p>
            <p class="title is-6 {{ classTextColor }}">
              {{ level }} {{ race }} {{ spec }} {{ characterClass }} <{{
                guild
              }}
              {{ realm }}>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CharacterCardComponent implements OnInit {
  imagePath: string;
  backgroundColor: string;
  classTextColor: string;
  @Input() itemLevel: string;
  @Input() level: string;
  @Input() spec: string;
  @Input() guild: string;
  @Input() realm: string;
  @Input() title: string;
  @Input() name: string;
  @Input() characterClass: string;
  @Input() race: string;
  @Input() faction: string;
  constructor() {}

  ngOnInit(): void {
    this.backgroundColor = `has-background-${this.faction.toLowerCase()}-color `;
    this.classTextColor = `color-${this.characterClass
      .toLowerCase()
      .replace(' ', '')}`;
    const imageName = this.characterClass.toLowerCase().replace(' ', '');
    this.imagePath = `/assets/images/${imageName}.jpg`;
  }
}
