export interface AppState {

    isInitializing : boolean;
    isInitialized : boolean;
    initializationError : string |null
}

export const initialAppState : AppState= {

    isInitializing : false,
    isInitialized : false,
    initializationError : null
}