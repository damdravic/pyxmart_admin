import { initialAuthState } from "./auth-state";
import * as AuthActions from "./auth-actions";

import { createReducer, on } from "@ngrx/store";

export const authReducer = createReducer(
    initialAuthState,

    on(AuthActions.Login , (state) => ({...state, isLoading: true, loaded: false, loginError: null })),
    on(AuthActions.LoginSuccess , (state, { userDTO }) => ({...state, authUser: userDTO, isLoading: false, loaded: true, loginError: null })),
    on(AuthActions.LoginFailure , (state, { error }) => ({...state, isLoading: false, loaded: true, loginError: error }))
)