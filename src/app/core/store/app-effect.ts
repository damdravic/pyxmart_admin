import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AppActions from "./app-actions";
import * as AuthActions from "./../../features/auth/store/auth-actions"
import { AuthService } from "../../features/auth/services/auth-service";
import { map, switchMap } from "rxjs";


@Injectable()
export class AppEffect {

    private actions$ = inject(Actions)
    private authService = inject(AuthService)

 initialize$ = createEffect(()=> 
    this.actions$.pipe(
        ofType(AppActions.appInitialize),
        switchMap(() => 
            this.authService.authMe().pipe(
               map(response => {
                return AuthActions.LoginSuccess({userDTO : response.data.userDTO})
               })
            )
        )

        
    )

)






}