import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/token/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiUrl = environment.domain;
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  createVideoDescription(id: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokenService.getToken()}`,
    });
    return this.http.post(
      `${this.apiUrl}/videos`,
      { codigo: id },
      {
        observe: 'response',
        headers: headers,
      }
    );
  }
}

export interface Video {
  id: string;
  description: string;
  codigo: string;
  estado: string;
}
