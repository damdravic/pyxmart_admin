import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCardA } from '../../cards/product-card-a/product-card-a';

@Component({
  imports: [FormsModule, ProductCardA],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {}
