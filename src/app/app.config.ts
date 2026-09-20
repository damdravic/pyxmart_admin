import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { authReducer } from './features/auth/store/auth-reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffect } from './features/auth/store/auth-effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
     provideClientHydration(),
     provideStore({
      auth : authReducer
     }),
     provideEffects([
      AuthEffect]
    )
     
  ]
};
