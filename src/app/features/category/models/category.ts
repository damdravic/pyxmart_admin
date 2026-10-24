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


