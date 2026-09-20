import { inject, Service } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../../../core/interfaces/httpResponse';
import { UserDTO } from '../../users/models/user-dto';

@Service()
export class AuthService {

    

    private http = inject(HttpClient);

    login(credentials : Credentials){
        
       return  this.http.post<HttpResponse<{userDTO : UserDTO}>>
            ("http://localhost:8081/admin/login", credentials, {withCredentials : true});

        
    }

    authMe(){
        return this.http.get<HttpResponse<{userDTO : UserDTO}>>
            ("http://localhost:8081/admin/authMe",  {withCredentials : true});
    }

 



}
