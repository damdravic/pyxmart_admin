import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CommonModule } from '@angular/common';
import { CategoryCard } from '../category-card/category-card';

@Component({
  imports: [CommonModule,CategoryCard],
  selector: 'app-category-list',
  styleUrl: './category-list.css',
  templateUrl: './category-list.html',
})
export class CategoryList {


   testCategorie: Category[] = [
  {
    id: 1,
    parentId: 0,
    name: 'Electrocasnice',
    description: 'Electrocasnice pentru casă',
    longDescription: 'Categorie principală pentru produse electrocasnice.',
    slug: 'electrocasnice',
    sortOrder: 1,
    active: true
  },
  {
    id: 2,
    parentId: 1,
    name: 'Mașini de spălat',
    description: 'Mașini de spălat rufe',
    longDescription: 'Mașini de spălat rufe de diferite capacități și mărci.',
    slug: 'masini-de-spalat',
    sortOrder: 2,
    active: true
  }
];








}
