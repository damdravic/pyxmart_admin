import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { initProductAdminDTO, ProductAdminDTO } from '../../models/product'
import { ProductService } from '../../services/product-service';
import { initProductRequest, ProductRequest } from '../../models/product-request';
import { CategoryService } from '../../../category/services/category-service';
import { error } from 'console';
import { Category } from '../../../category/models/category';

@Component({
  imports: [FormsModule],
  selector: 'app-product-new',
  styleUrl: './product-new.css',
  templateUrl: './product-new.html',
})
export class ProductNew implements OnInit {
  


  productRequest: ProductRequest = initProductRequest;
  allCategories = signal<Category[]>([]);

  private productService = inject(ProductService)
  private categoryService = inject(CategoryService)


  ngOnInit(): void {
    this.loadAllCategories();
  }

   loadAllCategories(){  this.categoryService.loadAllCategories().subscribe({
    next : (response ) => {
           this.allCategories.set(response.data.categories);
           console.log(response.data.categories);
    },
    error : (err ) => {
      console.log("Error on loading categories {} " , err.error.message)
    }
  })}

  saveProductRequest(ngForm: NgForm) {
    console.log("touched");
    this.productRequest = ngForm.value;

    this.productService.createNewProduct(this.productRequest).subscribe();

  }








}
