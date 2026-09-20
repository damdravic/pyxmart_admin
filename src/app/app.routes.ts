import { Routes } from '@angular/router';


export const routes: Routes = [

    {
        path: '',
        loadComponent: () =>
            import('./layouts/store-layout/var/main-layout/main-layout')
                .then(m => m.MainLayout),
                children :[
                    {
                        path:'',
                        loadChildren: () =>
                            import('./features/home/home.routes')
                        .then(m => m.HOME_ROUTES)
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
