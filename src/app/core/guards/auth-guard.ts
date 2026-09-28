import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsAutehnticated } from '../../features/auth/store/auth-selectors';
import { filter, map, switchMap, take, tap } from 'rxjs';
import { selectIsInitialized } from '../store/app-selectors';

export const authGuard: CanActivateFn = (route, state) => {
   console.log('GUARD');

  const router = inject(Router);
  const store = inject(Store);

  return store.select(selectIsInitialized).pipe(
    tap(value => console.log("isInitialized :" , value)),
    filter(isInitialized => isInitialized),
    take(1),
    switchMap(() =>
      store.select(selectIsAutehnticated).pipe(
        take(1),
        map(isAuthenticated =>{
          console.log("authenticated :" , isAuthenticated)
          return isAuthenticated ? true : router.createUrlTree(['/auth/login'])})
      )
    )
  )

};
