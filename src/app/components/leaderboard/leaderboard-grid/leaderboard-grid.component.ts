import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'leaderboard-grid',
  styles: [],
  template: `
    <table
      class="table is-striped is-bordered is-primary is-fullwidth"
    >
      <thead leaderboardHeader></thead>
      <tbody leaderboardBody [players]="entries"></tbody>
    </table>
  `,
})
export class LeaderboardGridComponent implements OnInit {
  @Input() entries = [];

  constructor() {}

  ngOnInit() {}
}
