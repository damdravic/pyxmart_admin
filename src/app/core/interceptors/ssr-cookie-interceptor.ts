import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID, REQUEST } from '@angular/core';
import { environment } from '../../../environments/environment';
import { isPlatformServer } from '@angular/common';

export const ssrCookieInterceptor: HttpInterceptorFn = (req, next) => {
 const platformId = inject(PLATFORM_ID);
  // 1. Only intercept when running on the Node server during SSR
  if (isPlatformServer(platformId)) {
    const incomingRequest = inject(REQUEST, { optional: true });

    console.log('SSR Cookie Interceptor: Incoming Request:', incomingRequest?.headers.get('cookie'));
    
    // 2. Extract the browser's cookie from the incoming request
    // Note: Angular's standard injection returns a Web API Request object, where headers use lowercase keys.
    const browserCookie = incomingRequest?.headers.get('cookie');

    if (browserCookie) {
      // 3. Clone the outgoing request and append the Cookie header
      const authorizedReq = req.clone({
        headers: req.headers.set('Cookie', browserCookie),
        withCredentials: true // Ensures credentials cross origins if calling a different domain
      });
      
      return next(authorizedReq);
    }
  }

  // 4. Pass the request through if on the client browser or if no cookie exists
  return next(req);
};
