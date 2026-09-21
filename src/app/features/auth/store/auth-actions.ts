import { UserDTO } from "../../users/models/user-dto";
import { Credentials } from "../models/credentials";
import { createAction, createActionGroup, props } from "@ngrx/store";

export const Login = createAction(
    '[Auth] Login',
    props<{ credentials: Credentials }>()
)

export const LoginSuccess = createAction(
    '[Auth] Login Success',
    props<{ userDTO: UserDTO }>()
)

export const LoginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
)


export const LogoutActions = createActionGroup(
    
)