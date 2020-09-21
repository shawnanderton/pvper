import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thead[leaderboardHeader]',
  template: ` <tr>
    <th class="has-text-centered is-uppercase has-text-weight-bold">Rank</th>
    <th class="has-text-centered is-uppercase has-text-weight-bold">Name</th>
    <th class="has-text-centered is-uppercase has-text-weight-bold">
      wins/lost
    </th>
    <th class="has-text-centered is-uppercase has-text-weight-bold">Ratings</th>
  </tr>`,
})
export class LeaderboardGridHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
