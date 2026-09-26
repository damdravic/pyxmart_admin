import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';


export const routes: Routes = [

    {
        path: '',
        canActivate:[authGuard],
        loadComponent: () =>
            import('./layouts/admin-layout/admin-layout')
                .then(m => m.AdminLayout),
                children :[
                    {
                        path:'',
                        loadChildren: () =>
                            import('./features/dashboard/dashboard.routes')
                        .then(m => m.dashboardRoutes)
                    }
                ]
    },
    {
        path: 'auth',
        loadComponent: () =>
            import('./layouts/auth-layout/auth-layout')
                .then(m => m.AuthLayout),
        children: [{
            path: '',
            loadChildren: () =>
                import('./features/auth/auth.routes')
                    .then(m => m.AUTH_ROUTES)}
                ]
    },
    {
        path:'error',
        loadComponent : () =>
            import('./layouts/error-layout/error-layout')
        .then(m => m.ErrorLayout),
        children: [
            {
                path:'',
                loadComponent : () =>
                    import('./features/errors/error/error')
                .then(m => m.Error)
            }
        ]

    }





];
