import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginDTO } from '../model/model.class';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:8080/api/auth';
  private token: string | null = null;

  
  constructor(private http: HttpClient, private router: Router) { }

  login(login: LoginDTO): Observable<any>{
    return this.http.post<{token: string}>(`${this.baseUrl}/login`, login)
    .pipe(
      tap(response =>{
        this.token = response.token;
        localStorage.setItem('token', response.token)
      })
    );
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('token');
  }

  getRole(): string | null {
    const token = this.getToken();
    if(token){
      try{
        const decoded: any = jwtDecode(token);
        return decoded.role || null;
      }catch(error){
        console.error('Error decoding token: ', error);
        return null;
      }
    }
    return null;
  }

}


