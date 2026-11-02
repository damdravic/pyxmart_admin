import { Category } from "./category";

export interface CategoryNode extends Category{
    children : CategoryNode[];
}