import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler, HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if(request.method === 'POST'){
      const base64Body = btoa(JSON.stringify(request.body));
      const newReq = request.clone({
        body: base64Body,
        headers: new HttpHeaders({
          'Content-Type': 'application/json', // Встановіть відповідний заголовок Content-Type
        }),
      });
      return next.handle(newReq);
    }
    return next.handle(request);
  }
}
