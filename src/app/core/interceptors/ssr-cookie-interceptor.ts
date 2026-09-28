import { HttpInterceptorFn } from '@angular/common/http';
import { inject, REQUEST } from '@angular/core';
import { environment } from '../../../environments/environment';

export const ssrCookieInterceptor: HttpInterceptorFn = (req, next) => {

  const incomingRequest = inject(REQUEST,{optional :true});

  console.log('REQUEST OBJECT --------:',  incomingRequest);
  console.log('REQUEST COOKIE --------:',  incomingRequest?.headers.get('cookie'));
  console.log('REQUEST URL: ---------',  incomingRequest?.url);




  if (!incomingRequest) {
    return next(req);
  }

  const cookie = incomingRequest.headers.get('cookies')

  if (!cookie) {
    return next(req);
  }

  if (!req.url.startsWith(environment.apiUrl)) {
    return next(req);
  }


  const modifiedRequest = req.clone({
    setHeaders: {
      Cookie: cookie
    }
  })

  return next(modifiedRequest);
};
