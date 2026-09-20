
import { UserDTO } from "../../users/models/user-dto";

export interface AuthState {
   
    authUser : UserDTO | null;
    isLoading : boolean;
    loaded : boolean;
    loginError : string | null;

}


export const initialAuthState : AuthState = {
    authUser: null,
    isLoading: false,
    loaded: false,
    loginError: null
}