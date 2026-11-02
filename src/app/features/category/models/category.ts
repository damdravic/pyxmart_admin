export interface Category {
    id : number,
    parentId: number | null,
    name: string,
    description : string,
    longDescription : string,
    slug : string,
    sortOrder : number,
    active :boolean
}

export const categoryInit : Category = {
    id : 0 ,
    parentId : 0 ,
    name : '' ,
    description : "" ,
    longDescription : '',
    slug : '',
    sortOrder : 0 ,
    active : true
}
