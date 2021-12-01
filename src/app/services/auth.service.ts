import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LoginResponse} from '../interfaces/login-response';
import {HttpClient} from '@angular/common/http';
import {API_URL, TOKEN} from '../values/variables';
import {FormGroup} from '@angular/forms';
import {LocalStorage} from '../helpers/cookie-methods';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  get isLoggedIn(): boolean {
    return !!LocalStorage.get(TOKEN);
  }

  login(form: FormGroup): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${API_URL}/api/userinfo/login/`, form.getRawValue());
  }
}
