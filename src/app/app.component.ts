import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  template: `
  <main>
    <header>
      <div><h1>Homes</h1></div>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
