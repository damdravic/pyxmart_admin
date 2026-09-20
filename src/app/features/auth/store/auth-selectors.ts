import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth-state";





export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const selectUser = createSelector(selectAuthState, state => state.authUser);

export const selectIsAutehnticated = createSelector(selectUser, user => user !== null);

export const  selectUsername = createSelector(selectUser, user => user?.firstname ?? null );
export const selectAuthError = createSelector(selectAuthState, state => state.loginError);