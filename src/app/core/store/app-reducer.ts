import { createReducer, on } from "@ngrx/store";
import * as AppActions from "./app-actions";
import { initialAppState } from "./app-state";
import { App } from "../../app";
import { error } from "console";


export const AppReducer = createReducer(

    initialAppState,
    on(AppActions.appInitialize, (state) => ({ ...state, initialize: true })),
    on(AppActions.appLoading, (state) => ({ ...state, initialize: true, loading: true })),
    on(AppActions.appLoaded, (state) => ({ ...state, initialize: false, loading: false, loaded: true, loadingError: null })),
    on(AppActions.appLoadFailure, (state, { error }) => ({ ...state, initialize: false, loading: false, loaded: false, loadingError: error }))

);

