import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {  initProductAdminDTO, ProductAdminDTO } from '../../models/product'
import { ProductService } from '../../services/product-service';
import { initProductRequest, ProductRequest } from '../../models/product-request';

@Component({
  imports: [FormsModule],
  selector: 'app-product-new',
  styleUrl: './product-new.css',
  templateUrl: './product-new.html',
})
export class ProductNew {

 
productRequest : ProductRequest = initProductRequest;
 private productService  = inject(ProductService)



 saveProductRequest( ngForm : NgForm){
  console.log("touched");
  this.productRequest = ngForm.value;

  this.productService.createNewProduct(this.productRequest).subscribe ();

 }








}
