import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsAutehnticated, selectUsername } from '../../../../../features/auth/store/auth-selectors';
import { CommonModule } from '@angular/common';
import { AccountMenu } from '../items/account-menu/account-menu';

@Component({
  imports: [CommonModule,AccountMenu],
  selector: 'app-actions',
  styleUrl: './actions.css',
  templateUrl: './actions.html',
})
export class Actions {

  private store = inject(Store);

isAuthenticated$ = this.store.select(selectIsAutehnticated);
username$ = this.store.select(selectUsername);







}
