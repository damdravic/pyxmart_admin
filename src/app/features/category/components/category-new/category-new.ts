import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, inject, input, OnInit, output, Output, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Category, categoryInit } from '../../models/category';
import { CategoryService } from '../../services/category-service';


@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-category-new',
  styleUrl: './category-new.css',
  templateUrl: './category-new.html',
})
export class CategoryNew implements OnInit {
  

  closeModal = output<void>();
  categorySig = input<Category >(categoryInit);
  category = this.categorySig();
  isEditMode = computed(() => this.categorySig().id !== 0);
 

  categories: Category[] = [];
  errorMessage = signal('');

  categoryService = inject(CategoryService);
 
ngOnInit(): void {
   
  }

  onSubmit() {
    this.categoryService.addCategory(this.categorySig()).subscribe({
      next: (response) => {
        console.log('Category added successfully', response);
        this.closeModal.emit();
      },
      error: (err) => {
      

        this.errorMessage.set(err.error.message)
       

      }
    }

    )
  }

  onCancel() {
    this.closeModal.emit();
  }




}
