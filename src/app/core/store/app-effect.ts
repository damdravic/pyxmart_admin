import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AppActions from "./app-actions"


@Injectable()
export class AppEffect {

    private actions$ = inject(Actions)

 initialize$ = createEffect(()=> 
    this.actions$.pipe(
        ofType(AppActions.appInitialize),
        
    )

)






}