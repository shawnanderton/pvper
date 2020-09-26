import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <pvper-header-bar></pvper-header-bar>
    <section class="container is-fluid">
      <div class="columns">
        <main class="column is-10">
          <div class="has-background-primary">
            <pvper-player></pvper-player>
          </div>
          <!-- //<pvper-leaderboard></pvper-leaderboard> -->
        </main>
        <aside class="column is-2"></aside>
      </div>
    </section>
  `,
})
export class AppComponent {
  title = 'pvper';
}
