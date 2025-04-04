import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-7clsee1nzr8ucaon.us.auth0.com',
      clientId: 'kEiYOOyLnSw1dGOy59GgHyR3sr0K9Qet',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200'
      },
      cacheLocation: 'localstorage'
    })
  ]
};
