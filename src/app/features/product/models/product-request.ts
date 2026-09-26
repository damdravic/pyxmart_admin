export interface ProductRequest { 

        
    name : string;
    code : string;
    shortDescription : string;
    description : string;
    categoryId : number;
    brandId : number;
 
    
    metaTitle : string;
    metaDescription : string;
    metaKeywords : string;


    purchasePrice : number;
    sellingPrice : number;
    vatRateId : number;
 
}

export const initProductRequest :  ProductRequest ={
    name: "",
    code: "",
    shortDescription: "",
    description: "",
    categoryId: 0,
    brandId: 0,
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    purchasePrice: 0,
    sellingPrice: 0,
    vatRateId: 0
}