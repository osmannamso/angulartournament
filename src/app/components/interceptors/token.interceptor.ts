import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {LocalStorage} from '../../helpers/cookie-methods';
import {TOKEN} from '../../values/variables';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${LocalStorage.get(TOKEN)}`
      }
    });

    return next.handle(request);
  }
}
