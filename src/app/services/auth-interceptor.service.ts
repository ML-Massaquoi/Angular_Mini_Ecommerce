import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Authservices } from './authservices'; // Import AuthService


/**
 * AuthInterceptor
 * ---------------
 * - Intercepts all outgoing HTTP requests
 * - Attaches Authorization: Bearer <idToken> if user is logged in
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(Authservices) as Authservices;
  const token = authService.token; // Get token from AuthService

  if (token) {
    // Clone the request and add Authorization header
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(cloned);
  }

  // If no token → forward original request
  return next(req);
};
