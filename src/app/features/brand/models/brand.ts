export interface Brand {
    id? : number;
    name : string;
    description : string | null; 
    slug : string ;
    active : boolean;
    logoUrl : string | null;
    logoUrlSecondary: string | null;
    createdAt? : string;
    updatedAt? : string;

}