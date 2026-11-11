import { ProductFinancialRequest } from "./product-financial-request";
import { ProductImageRequest } from "./product-image_request";
import { ProductInventoryRequest } from "./productinventory-request";

export interface ProductRequest {


    name: string;
    code: string;
    shortDescription: string;
    description: string;
    categoryId: number;
    brandId: number;
    status: string;
    featured: boolean;



    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;


    financial: ProductFinancialRequest;
    inventory: ProductInventoryRequest;
    images: ProductImageRequest[];

}

export const initProductRequest: ProductRequest = {
    name: "",
    code: "",
    shortDescription: "",
    description: "",
    categoryId: 0,
    brandId: 0,
    status: "DRAFT",
    featured: false,

    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",

    financial: {
        purchasePrice: 0,
        sellingPrice: 0,
        vatRateId: 0,
    },

    inventory : {
        warehouseId : 0,
        quantity : 0,
        reservedQuantity : 0
    },

    images :[]


}