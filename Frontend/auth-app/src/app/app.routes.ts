import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { authGuard } from './core/auth.guard';
import { SignupComponent } from './pages/register/signup/signup.component';
import { DashboardViewComponent } from './admin/dashboard/dashboard-view/dashboard-view.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'signup', 
    component: SignupComponent },
  {
    path: 'admin-dashboard',
    component: DashboardViewComponent,
    canActivate: [authGuard],
    children: [
      
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
