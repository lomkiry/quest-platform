import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-union-auth',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './union-auth.html',
  styleUrl: './union-auth.scss',
})
export class UnionAuth {
  activeTab = signal<'login' | 'register'>('login');

  setTab(tab: 'login' | 'register') {
    this.activeTab.set(tab);
  }
}
