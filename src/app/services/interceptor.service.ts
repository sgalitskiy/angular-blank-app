import {Injectable} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { HttpInterceptor,HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class InterceptorCommon implements HttpInterceptor {

  baseHeaders = {};

  constructor(private toastr:ToastrService) {

  }


  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      //headers: req.headers.set('X-Auth-Token',''),
      //params: req.params.set('t', '' + new Date().getTime())
    });

    return next.handle(request).catch( error => {
      const errorMessage = error.message || error.statusText || 'Undefined error';

      this.toastr.error(errorMessage, 'Error');

      return Observable.throw(error);
    });
  }

}
