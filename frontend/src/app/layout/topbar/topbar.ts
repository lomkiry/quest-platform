import { Component, signal } from '@angular/core';
import { UnionAuth } from '../auth-component/union-auth/union-auth';

@Component({
  selector: 'app-topbar',
  imports: [UnionAuth],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  isOpen = signal(false);

  toggle() {
    this.isOpen.update(v => !v);
    console.log('isOpen signal:', this.isOpen());
  }
}
