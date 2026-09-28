import { createAction, props } from "@ngrx/store";


export const appInitialize = createAction(
    '[App] Initialize'
)

export const appInitialized = createAction(
    '[App] Initialized'
)



 export const appInitializedError = createAction(
    '[App] InitializationError',
    props<{error : string}>()
 )