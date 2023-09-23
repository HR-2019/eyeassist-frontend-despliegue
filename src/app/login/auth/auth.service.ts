import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://eyeassist-core-production.up.railway.app'

  constructor(private http: HttpClient) { }

  login(email: string, pass: string) {
    return this.http.post(`${this.apiUrl}/auth`, { correo: email, contrasenia: pass}, { observe: 'response'});
  }
}
