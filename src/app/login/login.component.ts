import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export interface AuthResponseEntity {
  correo: string;
  exporesIn: number;
  nombre: string;
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  user = {
    email: '',
    password: '',
  };
  loginForm;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService
        .login(form.value.email, form.value.pass)
        .subscribe(response => {
          if (response.status == 200) {
            const body: AuthResponseEntity =
              response.body as AuthResponseEntity;
            localStorage.setItem('token', body.token);
            this.router.navigate(['/home/dash']);
          }
        });
    }
  }
}
