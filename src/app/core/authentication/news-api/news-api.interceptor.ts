import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../../config/appConfig';
/**
 * Interceptor for NewsApi. Add autthorization token
 *
 * @export
 */
@Injectable()
export class NewsApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq: HttpRequest<unknown>;

    if (request.url.match('api/news/')) {
      authReq = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: AppConfig.GOOGLE_NEWS_API_KEYS
        })
      });
    } else {
      authReq = request;
    }
    return next.handle(authReq);
  }
}
