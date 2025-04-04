import { Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../auth.guard';

export const routes: Routes = [
    { path: 'callback', component: CallbackComponent },
    { path: 'home', component: HomeComponent,canActivate:[authGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
