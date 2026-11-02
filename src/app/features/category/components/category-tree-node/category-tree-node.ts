import { Component, input, output } from '@angular/core';
import { CategoryNode } from '../../models/category-node';
import { Category } from '../../models/category';

@Component({
  imports: [CategoryTreeNode],
  selector: 'app-category-tree-node',
  styleUrl: './category-tree-node.css',
  templateUrl: './category-tree-node.html',
})
export class CategoryTreeNode {


  editCategorySig = output<number>();

  editCategory(categoryNodeId: number) {
    console.log("categoryNodeId trimis : ", categoryNodeId);
    this.editCategorySig.emit(categoryNodeId);
  }

  categoryNode = input.required<CategoryNode>();

  emitIdCategory(categoryNodeId: number) {
    console.log("emitIdCategory", categoryNodeId )
    this.editCategory(categoryNodeId)
  }


}
