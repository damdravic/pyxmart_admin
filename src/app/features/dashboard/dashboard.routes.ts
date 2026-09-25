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
        }
       
    ]
    
}




]