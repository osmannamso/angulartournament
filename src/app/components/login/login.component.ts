import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {take} from 'rxjs';
import {LocalStorage} from '../../helpers/cookie-methods';
import {TOKEN} from '../../values/variables';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  submit(): void {
    this.authService.login(this.loginForm).pipe(
      take(1)
    ).subscribe((data) => {
      LocalStorage.set(TOKEN, data.access);
      this.router.navigate(['/tournaments']).then(null);
    });
  }

}
