import { createAction, props } from "@ngrx/store";


export const appInitialize = createAction(
    '[App] Initialize'
)

export const appLoading = createAction(
    '[App Loading]'
    
)
 export const appLoaded = createAction(
    '[App] Loaded'
    
 )

 export const appLoadFailure = createAction(
    '[App] Load Failure',
    props<{error : string}>()
 )