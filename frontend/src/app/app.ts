import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Health } from './services/health/health';
import { Topbar } from "./layout/topbar/topbar";
import { Footbar } from "./layout/footbar/footbar";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, Footbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  private health = inject(Health);

  ngOnInit() {
    this.health.check().subscribe({
      next: data => console.log(data),
      error: () => console.log('Backend is down')
    })
  }

}
