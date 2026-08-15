import { Component, signal } from '@angular/core';
import { AuthForm } from '../auth-form/auth-form';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-topbar',
  imports: [AuthForm],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  isOpen = signal(false);
  authMode = signal<AuthMode>('login');

  openAuth(mode: AuthMode) {
    this.authMode.set(mode);
    this.isOpen.set(true);
  }

  closeAuth() {
    this.isOpen.set(false);
  }
}
