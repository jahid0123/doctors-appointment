import { Routes } from '@angular/router';
import { AdminPanelComponent } from './pages/admin/admin-panel/admin-panel.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [

    { path: 'login', component: LoginComponent, },

    {
        path: '',
        component: AdminPanelComponent,
        canActivate: [authGuard],
        children: [
            { path: 'admin-dashboard', component: AdminPanelComponent },

        ],
    },

    {path: '**', redirectTo: 'login'}
    
];
