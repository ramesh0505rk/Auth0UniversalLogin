import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../auth.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[authGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
