import { Routes } from '@angular/router';
import { AdminPanelComponent } from './pages/admin/admin-panel/admin-panel.component';

export const routes: Routes = [

    {path: 'api/auth/admin', component: AdminPanelComponent},
    
];
