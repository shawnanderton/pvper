import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pvper-leaderboard',
  template: `
    <section class="section">
      <h1 class="title">Pvp Leaderboard</h1>
      <leaderboard-grid [entries]='entries'></leaderboard-grid>
    </section>
  `,
})
export class LeaderboardComponent implements OnInit {
  constructor() {}

  entries =  [
    {
      "name": "Niarbtw",
      "faction": "ALLIANCE",
      "realm": {
        "id": 76,
        "name": "sargeras"
      },
      "2v2": {
        "rank": 1,
        "rating": 3018,
        "played": 660,
        "won": 564,
        "lost": 96
      },
      "3v3": {},
      "rbg": {},
      "gender": "Female",
      "level": 120,
      "itemLevel": 479,
      "title": "Notorious Gladiator",
      "characterClass": {
        "id": 2,
        "name": "Paladin"
      },
      "spec": {
        "id": 65,
        "name": "Holy"
      },
      "race": {
        "id": 1,
        "name": "Human"
      },
      "guild": {
        "id": 74195425,
        "name": "dog squad"
      },
      "id": "us-sargeras-Niarbtw",
      "_rid": "2GIfAJhI4swCAAAAAAAAAA==",
      "_self": "dbs/2GIfAA==/colls/2GIfAJhI4sw=/docs/2GIfAJhI4swCAAAAAAAAAA==/",
      "_etag": "\"00000000-0000-0000-3f66-23e0c7d101d6\"",
      "_attachments": "attachments/",
      "_ts": 1591821097
    },
    {
      "name": "Genji",
      "faction": "HORDE",
      "realm": {
        "id": 1190,
        "name": "baelgun"
      },
      "2v2": {
        "rank": 2,
        "rating": 2853,
        "played": 305,
        "won": 208,
        "lost": 97
      },
      "3v3": {},
      "rbg": {},
      "gender": "Female",
      "level": 120,
      "itemLevel": 480,
      "title": "Sinister Gladiator",
      "characterClass": {
        "id": 12,
        "name": "Demon Hunter"
      },
      "spec": {
        "id": 577,
        "name": "Havoc"
      },
      "race": {
        "id": 10,
        "name": "Blood Elf"
      },
      "id": "us-baelgun-Genji",
      "_rid": "2GIfAJhI4swDAAAAAAAAAA==",
      "_self": "dbs/2GIfAA==/colls/2GIfAJhI4sw=/docs/2GIfAJhI4swDAAAAAAAAAA==/",
      "_etag": "\"00000000-0000-0000-3f66-2406f90c01d6\"",
      "_attachments": "attachments/",
      "_ts": 1591821097
    },
    {
      "name": "Thugonomicz",
      "faction": "HORDE",
      "realm": {
        "id": 59,
        "name": "malganis"
      },
      "2v2": {
        "rank": 3,
        "rating": 2843,
        "played": 352,
        "won": 322,
        "lost": 30
      },
      "3v3": {},
      "rbg": {},
      "gender": "Male",
      "level": 120,
      "itemLevel": 484,
      "title": "Wrathful Gladiator",
      "characterClass": {
        "id": 9,
        "name": "Warlock"
      },
      "spec": {
        "id": 267,
        "name": "Destruction"
      },
      "race": {
        "id": 2,
        "name": "Orc"
      },
      "guild": {
        "id": 90787213,
        "name": "didnt ask"
      },
      "id": "us-malganis-Thugonomicz",
      "_rid": "2GIfAJhI4swEAAAAAAAAAA==",
      "_self": "dbs/2GIfAA==/colls/2GIfAJhI4sw=/docs/2GIfAJhI4swEAAAAAAAAAA==/",
      "_etag": "\"00000000-0000-0000-3f66-24313e8301d6\"",
      "_attachments": "attachments/",
      "_ts": 1591821098
    }];

  ngOnInit(): void {}
}
