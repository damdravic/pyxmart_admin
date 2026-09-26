import { inject, Service } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductAdminDTO } from '../models/product';
import { HttpResponse } from '../../../core/interfaces/httpResponse';
import { ProductRequest } from '../models/product-request';

@Service()
export class ProductService {

    
    private server =  environment.apiUrl;
    private http = inject(HttpClient);




    createNewProduct(productRequest : ProductRequest) {
      return  this.http.post<HttpResponse<{productRequest : ProductRequest}>>(
            `${this.server}/admin/product/new` , productRequest  , {withCredentials : true}
        )
    }

   








}
