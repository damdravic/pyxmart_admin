import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID, REQUEST } from '@angular/core';
import { environment } from '../../../environments/environment';
import { isPlatformServer } from '@angular/common';

export const ssrCookieInterceptor: HttpInterceptorFn = (req, next) => {
 const platformId = inject(PLATFORM_ID);
 
  if (isPlatformServer(platformId)) {
    const incomingRequest = inject(REQUEST, { optional: true });

    const browserCookie = incomingRequest?.headers.get('cookie');

    if (browserCookie) {
  
      const authorizedReq = req.clone({
        headers: req.headers.set('Cookie', browserCookie),
        withCredentials: true 
      });
      
      return next(authorizedReq);
    }
  }

  return next(req);
};
