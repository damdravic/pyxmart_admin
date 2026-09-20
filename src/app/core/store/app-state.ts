export interface AppState {
    initialize : boolean;
    loading : boolean;
    loaded : boolean;
    loadingError : string |null
}

export const initialAppState : AppState= {
    initialize : false,
    loading : false,
    loaded : false,
    loadingError : null
}