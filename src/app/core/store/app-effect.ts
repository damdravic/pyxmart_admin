import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AppActions from "./app-actions";
import * as AuthActions from "./../../features/auth/store/auth-actions"
import { AuthService } from "../../features/auth/services/auth-service";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { error } from "console";


@Injectable()
export class AppEffect {

    private actions$ = inject(Actions)
    private authService = inject(AuthService)

    initialize$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.appInitialize),
            switchMap(() => 
              this.authService.authMe().pipe(
                    switchMap(response => of(AuthActions.LoginSuccess({ userDTO: response.data.userDTO }),
                        AppActions.appInitialized())
                    ),
                    catchError(error => {
                        console.log('AUTH ME ERROR:', error.status, error);

                        if (error.status === 401) {
                            return of(AppActions.appInitialized());

                        }

                        return of(
                            AppActions.appInitializedError({
                                error: error.message ?? 'Initialization Failed'
                            })
                        )

                    })

                )
            ),



        )

    )






}