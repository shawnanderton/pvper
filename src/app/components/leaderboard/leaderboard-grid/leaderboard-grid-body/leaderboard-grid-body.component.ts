import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tbody[leaderboardBody]',
  template: ` <tr
    class="faction-{{ player.faction.toLowerCase() }}"
    *ngFor="let player of players"
  >
    <td class="has-text-centered is-uppercase has-text-weight-bold">
      {{ player.bracket2v2.rank }}
    </td>
    <td>
      <pvper-character-card
        [name]="player.name"
        [characterClass]="player.characterClass.name"
        [race]="player.race.name"
        [faction]="player.faction"
      ></pvper-character-card>
    </td>
    <td>
      <rating-progress-bar
        [wins]="player.bracket2v2.won"
        [losses]="player.bracket2v2.lost"
      ></rating-progress-bar>
    </td>
    <td class="has-text-centered is-uppercase has-text-weight-bold">
      {{ player.bracket2v2.rating }}
    </td>
  </tr>`,
})
export class LeaderboardGridBodyComponent implements OnInit {
  constructor() {}

  @Input() players: any = [];

  ngOnInit() {}
}
