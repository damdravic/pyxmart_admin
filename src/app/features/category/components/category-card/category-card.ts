import { Component, input } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  imports: [],
  selector: 'app-category-card',
  styleUrl: './category-card.css',
  templateUrl: './category-card.html',
})
export class CategoryCard {

 category = input.required<Category>();




}
