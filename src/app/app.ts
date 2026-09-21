import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AppActions from './core/store/app-actions'

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pyxmart_shop');

  private store = inject(Store);
  
  constructor(){
    this.store.dispatch(AppActions.appInitialize())
  }

}
