import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { BrandService } from '../../services/brand-service';
import { Brand } from '../../models/brand';
import { response } from 'express';
import { BrandNew } from '../brand-new/brand-new';

@Component({
  imports: [BrandNew],
  selector: 'app-brand-list',
  styleUrl: './brand-list.css',
  templateUrl: './brand-list.html',
})
export class BrandList implements OnInit {

  brandDialog = viewChild.required<ElementRef<HTMLDialogElement>>('brandDialog');




  
  brands = signal<Brand[]>([]);
  errMessage = signal<string | null>(null)
  selectedBrand = signal<Brand | null>(null)
  brandService = inject(BrandService);

  ngOnInit(): void {
    this.getAllBrands();
  }

openEdit(brand : Brand) {
this.selectedBrand.set(brand);
this.brandDialog().nativeElement.showModal();
}

openNew(){
  this.selectedBrand.set(null);
  this.brandDialog().nativeElement.showModal();
}



  getAllBrands() {
    this.brandService.getAllBrands().subscribe({
      next: (response) => {
        this.brands.set(response.data.brands)
      },
      error: (err) => {
        this.errMessage.set(err.error.message)
      }
    })
  }











}
