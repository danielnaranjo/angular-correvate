import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataServiceInterceptor implements HttpInterceptor {

  constructor() {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const customHeader = {
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    };
    if (environment.apiUrl.isRequiredHeader) {
      customHeader[`${Object.keys(environment.apiUrl.requiredHeader)}`] = Object.values(environment.apiUrl.requiredHeader).toString();
    }
    const newHeaders = req.clone({
      headers: new HttpHeaders(customHeader)
    });
    
    return next.handle(newHeaders);
  }
}
