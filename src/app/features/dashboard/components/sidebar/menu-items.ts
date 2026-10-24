export const menuItems = [
    { label: 'Dashboard', route: '/' },
    { label: 'Products',children:[
        
        {
            label:'Product' ,route:'/products'
        },
        {
            label:'Category',route:'/category'
        }
    ] },
    { label : 'New Product' ,route : '/new'},
    { label: 'Orders', route: '/orders' }
]