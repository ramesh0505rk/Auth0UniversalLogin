import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.isAuthenticated$.pipe(
        map(isAuthenticated => {
            if (isAuthenticated) {
                return true; // Allow access to home
            } else {
                authService.loginWithRedirect(); // Trigger login redirect
                return false; // Block navigation until callback
            }
        })
    );
};