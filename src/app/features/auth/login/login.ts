import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Credentials, initialCredentials } from '../models/credentials';
import { AuthService } from '../services/auth-service';
import { error } from 'console';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth-actions';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  credentials: Credentials = initialCredentials;
  constructor(private authService: AuthService,private router : Router , private store: Store) {}
/*
  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this.authService.login(this.credentials).subscribe({
        next: response => {
          console.log(response);
          this.router.navigate(['/']);
        },
        error: error => {
          console.log('login error');
        }

      })
    }

  }

*/


login(loginForm: NgForm) {
  if (loginForm.valid) {

    this.store.dispatch(AuthActions.Login({ credentials: this.credentials }));

  }}






}
