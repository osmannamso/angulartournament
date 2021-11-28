import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LoginResponse} from '../interfaces/login-response';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../values/variables';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  login(form: FormGroup): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${API_URL}/api/userinfo/login/`, form.getRawValue());
  }
}
