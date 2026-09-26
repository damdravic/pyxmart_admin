import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsAutehnticated } from '../../features/auth/store/auth-selectors';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {


  const router = inject(Router);
  const store = inject(Store);
  
 return store.select(selectIsAutehnticated).pipe(
  map(isAuthenticate => isAuthenticate 
    ? true
    : router.createUrlTree(['/auth/login']))
 )




};
