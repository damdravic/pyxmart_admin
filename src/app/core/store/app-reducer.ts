import { createReducer, on } from "@ngrx/store";
import * as AppActions from "./app-actions";
import { initialAppState } from "./app-state";
import { App } from "../../app";
import { error } from "console";


export const appReducer = createReducer(

    initialAppState,
    on(AppActions.appInitialize, (state) => {console.log('APP INITIALIZE')
        return{ ...state, isInitializing : true, isInitialized: false, initializationError:null }}),
    on(AppActions.appInitialized, (state) => ({...state, isInitializing : false, isInitialized : true, initializationError : null})),
    on(AppActions.appInitializedError, (state, { error }) => ({ ...state, isInitializing: false, isInitialized: false, initializationError: error }))

);

