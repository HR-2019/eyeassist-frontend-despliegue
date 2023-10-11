import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/token/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  private apiUrl = environment.domain;
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  getVideoCount() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokenService.getToken()}`,
    });
    return this.http.get(`${this.apiUrl}/videos/total`, {
      observe: 'response',
      headers: headers,
    });
  }

  getImageCount() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokenService.getToken()}`,
    });
    return this.http.get(`${this.apiUrl}/imagenes/total`, {
      observe: 'response',
      headers: headers,
    });
  }
  getVideoList() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokenService.getToken()}`,
    });
    return this.http.get(`${this.apiUrl}/videos`, {
      observe: 'response',
      headers: headers,
    });
  }
}
