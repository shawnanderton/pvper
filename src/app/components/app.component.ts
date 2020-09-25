import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <pvper-header-bar></pvper-header-bar>
      <div class="section columns">
        <main class="column">
          <pvper-player></pvper-player>
          <!-- //<pvper-leaderboard></pvper-leaderboard> -->
        </main>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'pvper';
}
