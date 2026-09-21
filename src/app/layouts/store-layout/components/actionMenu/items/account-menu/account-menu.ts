import { Component, HostListener, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsAutehnticated, selectUsername } from '../../../../../../features/auth/store/auth-selectors';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {auth}

@Component({
  imports: [CommonModule, AsyncPipe,
    RouterLink],
  selector: 'app-account-menu',
  styleUrl: './account-menu.css',
  templateUrl: './account-menu.html',
})
export class AccountMenu {

  private store = inject(Store);

  menuOpen = signal(false);


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!target.closest('.account-menu')) {
      this.menuOpen.set(false);
    }
  }

  isAuthenticated$ = this.store.select(selectIsAutehnticated);
  username$ = this.store.select(selectUsername);

  toggleMenu() {
    console.log("toggle");
    this.menuOpen.update(value => !value);
  }

  logout() {
    this.store.dispatch(AuthenticatorAssertionResponse.)
    this.menuOpen.set(false);

  }
}