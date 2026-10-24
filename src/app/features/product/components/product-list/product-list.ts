import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductAdminDTO } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductCardA } from '../../cards/product-card-a/product-card-a';

@Component({
  imports: [FormsModule, CommonModule, ProductCardA],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {

  productList = signal< ProductAdminDTO[]>([]) ;

  private productService = inject(ProductService);

  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    console.log('### PRODUCT LIST - TEST NOU ###');


  
      console.log('### APEL EXECUTAT EXCLUSIV ÎN BROWSER ###');
      this.productService.getAll().subscribe({


        next: (response) => {

          this.productList.set(response.data.productsAdminDTO);
          console.log("Response -> ", this.productList);

        },

        error: (err) => {

          console.error('[getAll] Corp răspuns:', err.error);
        }

      });
    }

  }



