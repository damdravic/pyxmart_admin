import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { HttpResponse } from '../../../core/interfaces/httpResponse';
import { environment } from '../../../../environments/environment';
import { Category } from '../models/category';

@Service()
export class CategoryService {


    private server = environment.apiUrl;
    private http = inject(HttpClient);

    addCategory(category: Category) {
        return this.http.post<HttpResponse<{ category: Category }>>(
            `${this.server}/admin/category/addCategory`, category, { withCredentials: true }
        )
    }















}
