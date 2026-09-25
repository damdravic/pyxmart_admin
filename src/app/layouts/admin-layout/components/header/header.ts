import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { Search } from '../search/search';
import { Actions } from '../actionMenu/actions/actions';

@Component({
  imports: [Logo,Search,Actions],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
