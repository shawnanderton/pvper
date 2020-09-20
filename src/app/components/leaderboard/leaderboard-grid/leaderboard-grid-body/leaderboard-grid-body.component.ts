import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tbody[leaderboardBody]',
  template: ` <tr *ngFor="let player of players">
    <td>{{ player['2v2'].rank }}</td>
    <td>{{ player.name }}</td>
    <td>wins/lost</td>
    <td>Ratings</td>
  </tr>`,
})
export class LeaderboardGridBodyComponent implements OnInit {
  constructor() {}

  @Input() players: any = [];

  ngOnInit() {}
}
