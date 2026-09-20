import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from "./auth-actions";
import { AuthService } from "../services/auth-service";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffect {
   
    private actions$ = inject(Actions);
    private authService = inject(AuthService);
    private router = inject(Router);


 login$ = createEffect(() => 
    this.actions$.pipe(
        ofType(AuthActions.Login),
        switchMap(({ credentials }) => 
            this.authService.login(credentials).pipe(
                map(response => {
                    console.log(response.data.userDTO)
                    this.router.navigate(['/']);
                  return  AuthActions.LoginSuccess({ userDTO: response.data.userDTO });}
                ),
                catchError(error => this.handleLoginError(error))
            )

    )
 ));

  handleLoginError(error: HttpErrorResponse) {
         
    let message : string;
    switch(error.status){
        case 0 : 
        message = 'Serverul nu poate fi accesat.';
        break;
        case 401:
      message = 'Email sau parolă incorectă.';
      break;

    case 403:
      message = 'Nu ai permisiunea de a efectua această operațiune.';
      break;

    case 500:
      message = 'A apărut o eroare pe server.';
      break;

    default:
      message = 'A apărut o eroare neașteptată.';

    }

       return of(AuthActions.LoginFailure({error: message}));
    }



}


