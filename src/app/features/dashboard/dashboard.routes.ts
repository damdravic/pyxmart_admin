export const dashboardRoutes = [

{
    path: '',
    loadComponent: () => import('./dashboard/dashboard')
    .then(m => m.Dashboard),
    children: [
        {
            path: '',
            loadComponent: () => import('./components/dashboard-home/dashboard-home')
            .then(m => m.DashboardHome)
        },
        {
            path: 'products',
            loadComponent: () => import('./../product/components/product-list/product-list')
            .then(m => m.ProductList)
        },
        {
            path: 'category',
            loadComponent : () => import('./../category/components/category-list/category-list')
            .then(m => m.CategoryList)
        },
        {
            path : 'new',
            loadComponent: () => import('./../product/components/product-new/product-new')
             .then(m => m.ProductNew)
        }
       
    ]
    
}




]