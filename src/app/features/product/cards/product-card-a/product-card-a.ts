import { Component, input } from '@angular/core';
import { ProductAdminDTO } from '../../models/product'

@Component({
  imports: [],
  selector: 'app-product-card-a',
  styleUrl: './product-card-a.css',
  templateUrl: './product-card-a.html',
})
export class ProductCardA {

product  = input.required<ProductAdminDTO>();



}
