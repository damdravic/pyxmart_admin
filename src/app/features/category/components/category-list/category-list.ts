import { Component, inject, OnInit, signal } from '@angular/core';
import { Category, categoryInit } from '../../models/category';
import { CommonModule } from '@angular/common';
import { CategoryCard } from '../category-card/category-card';
import { CategoryNew } from '../category-new/category-new';
import { CategoryService } from '../../services/category-service';
import { CategoryNode } from '../../models/category-node';
import { CategoryTreeNode } from '../category-tree-node/category-tree-node';


@Component({
  imports: [CommonModule, CategoryCard, CategoryNew, CategoryTreeNode],
  selector: 'app-category-list',
  styleUrl: './category-list.css',
  templateUrl: './category-list.html',
})
export class CategoryList implements OnInit {


  categories = signal<Category[]>([]);
  selectedCategory = signal<Category | null>(null);
  errorMessage = signal('');
  catTree: CategoryNode[] = [];
  modalOpened = signal<boolean>(false);

  categoryService = inject(CategoryService);


  ngOnInit(): void {
    this.loadAllCategories();

  }

  getTreeCategories(categories: Category[]): CategoryNode[] {
    const nodes = new Map<number, CategoryNode>();

    categories.forEach(category => {
      nodes.set(category.id, { ...category, children: [] });
    });

    const result: CategoryNode[] = [];

    categories.forEach(category => {

      const node = nodes.get(category.id)!;

      if (category.parentId === null || category.parentId === 0) {
        result.push(node);
      } else {
        nodes.get(category.parentId)?.children.push(node);
      }
    })
    return result;
  }

  editCategory(id: number) {
console.log("categoryNodeId primit in categoriList : ",id);
    this.selectedCategory.set(this.categories().find(cat => cat.id === id) ?? null);
   
    let category = this.selectedCategory();
    
    if (category != null) {
      this.openModal();
    }

    category = categoryInit;
   

  }


  loadAllCategories() {
    this.categoryService.loadAllCategories().subscribe({
      next: (response) => {
        console.log(response.data.categories);
        this.categories.set(response.data.categories);
        this.catTree = this.getTreeCategories(this.categories());


      },
      error: (err) => {

        this.errorMessage.set(err.error.message);


      }
    })
  }


  openModal() {
    this.modalOpened.update(value => !value);
  }



}
