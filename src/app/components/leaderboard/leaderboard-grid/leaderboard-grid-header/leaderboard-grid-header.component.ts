import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thead[leaderboardHeader]',
  template: ` <tr>
    <th>Rank</th>
    <th>Name</th>
    <th>wins/lost</th>
    <th>Ratings</th>
  </tr>`,
})
export class LeaderboardGridHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
