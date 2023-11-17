import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.domain;

  constructor(private http: HttpClient) {}

  login(email: string, pass: string) {
    return this.http.post(
      `${this.apiUrl}/auth`,
      { correo: email, contrasenia: pass },
      { observe: 'response' }
    );
  }
}
