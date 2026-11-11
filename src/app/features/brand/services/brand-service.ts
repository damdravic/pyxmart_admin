import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { HttpResponse } from '../../../core/interfaces/httpResponse';
import { Brand } from '../models/brand';
import { environment } from '../../../../environments/environment';

@Service()
export class BrandService {



    http = inject(HttpClient);
    server = environment.apiUrl;


    getAllBrands() {
        return this.http.get<HttpResponse<{ brands : Brand[] }>>(
            `${this.server}/admin/brand/getAllBrands`, { withCredentials: true }
        )
    }

    addNewBrand(brand: Brand) {
        return this.http.post<HttpResponse<{ brand: Brand }>>(
            `${this.server}/admin/brand/saveNewBrand`, brand, { withCredentials: true }
        )
    }

    editBrand(brand: Brand) {
        return this.http.post<HttpResponse<{ brand: Brand }>>(
            `${this.server}/admin/brand/editBrand`, brand, { withCredentials: true }
        )
    }


    saveLogo(logoFd : FormData){
        return this.http.post<HttpResponse<{logoUrl : string}>>(
            `${this.server}/admin/brand/saveLogo`,logoFd,{withCredentials : true}
        )
    }



}
