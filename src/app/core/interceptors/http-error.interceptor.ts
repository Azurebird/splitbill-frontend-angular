import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const errorMapping = {
  '1002': 'User already exists'
};

const buildErrorResponse = errorCode => ({
  message: errorMapping[errorCode] || 'A server error has occurred'
});

/**
 * Http interceptor to handle error response from server and translate them
 */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            // client-side error
            console.log(error);
            return throwError(`Error: ${error.error.message}`);
          } else {
            // server-side error
            return throwError(buildErrorResponse(error.error.code));
          }
        })
      )
  }
}
