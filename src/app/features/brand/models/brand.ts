export interface Brand {
    id: number;
    name : string;
    description : string; 
    slug : string;
    isActive : boolean;
    logoUrl : string | null;
    logoUrlSecondary: string | null;
    createdAt? : string;
    updatedAt? : string;

}