import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCardA } from '../../cards/product-card-a/product-card-a';
import { ProductAdminDTO } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, ProductCardA, CommonModule],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {

  productList: ProductAdminDTO[] = [];

  private productService = inject(ProductService);



  ngOnInit(): void {
   this.productService.getAll().subscribe({
    
    next: (response) => {
             this.productList = response.data.productsAdminDTO;
             console.log(this.productList);
      },

      error : (err ) => {
        console.error(err);
      }

  });


  }}
