import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pvper-player',
  template: `<section class="hero">
      <div class="columns has-background-alliance-color">
        <div class="column is-one-third">
          <pvper-character-card
            [name]="player.name"
            [characterClass]="player.characterClass.name"
            [race]="player.race.name"
            [title]="player.title"
            [faction]="player.faction"
            [itemLevel]="player.itemLevel"
            d
            [level]="player.level"
            [spec]="player?.spec.name"
            [guild]="player?.guild.name"
            [realm]="player?.realm.name"
          ></pvper-character-card>
        </div>
        <div class="column">
          <h2 class="has-text-centered">3v3 Arena</h2>
          <div class="px-6">
            <rating-progress-bar
              [wins]="110"
              [losses]="90"
            ></rating-progress-bar>
          </div>
          <div class="has-text-centered has-text-weight-bold is-size-4">
            3210
          </div>
        </div>
        <div class="column">
          <h1 class="has-text-centered">2v2 Arena</h1>
          <div class="px-6">
            <rating-progress-bar
              [wins]="110"
              [losses]="90"
            ></rating-progress-bar>
          </div>
          <div class="has-text-centered has-text-weight-bold is-size-4">
            3210
          </div>
        </div>
        <div class="column m-6">
          <h2 class="has-text-centered">Rated Battlegrounds</h2>
          <div class="px-6">
            <rating-progress-bar
              [wins]="110"
              [losses]="90"
            ></rating-progress-bar>
          </div>
          <div class="has-text-centered has-text-weight-bold is-size-4">
            3210
          </div>
        </div>
      </div>
    </section>
    <section class="section">Hello</section>`,
})
export class PlayerComponent implements OnInit {
  player = {
    name: 'Niarbtw',
    faction: 'ALLIANCE',
    realm: {
      id: 76,
      name: 'sargeras',
    },
    bracket2v2: {
      rank: 1,
      rating: 3018,
      played: 660,
      won: 564,
      lost: 96,
    },
    '3v3': {},
    rbg: {},
    gender: 'Female',
    level: 120,
    itemLevel: 479,
    title: 'Notorious Gladiator',
    characterClass: {
      id: 2,
      name: 'Paladin',
    },
    spec: {
      id: 65,
      name: 'Holy',
    },
    race: {
      id: 1,
      name: 'Human',
    },
    guild: {
      id: 74195425,
      name: 'dog squad',
    },
    id: 'us-sargeras-Niarbtw',
    _rid: '2GIfAJhI4swCAAAAAAAAAA==',
    _self: 'dbs/2GIfAA==/colls/2GIfAJhI4sw=/docs/2GIfAJhI4swCAAAAAAAAAA==/',
    _etag: '"00000000-0000-0000-3f66-23e0c7d101d6"',
    _attachments: 'attachments/',
    _ts: 1591821097,
  };
  constructor() {}

  ngOnInit(): void {}
}
