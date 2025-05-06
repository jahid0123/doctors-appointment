import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly tokenKey = 'access_token';
  private roleSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }) {
    return this.http.post<any>('http://localhost:8080/api/auth/login', credentials);
  }

  setToken(token: string) {
    // Save the token
    localStorage.setItem(this.tokenKey, token);

    try {
      // Decode payload safely
      const payloadPart = token.split('.')[1];
      const base64 = payloadPart.replace(/-/g, '+').replace(/_/g, '/');
      const json = decodeURIComponent(atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join(''));
      const payload = JSON.parse(json);

      // Set role if available
      if (payload.role) {
        this.roleSubject.next(payload.role);
      } else {
        this.roleSubject.next(null);
      }
    } catch (error) {
      console.error('Failed to decode token:', error);
      this.roleSubject.next(null);
    }
  }

  getRole(): Observable<string | null> {
    return this.roleSubject.asObservable();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.roleSubject.next(null);
    this.router.navigate(['/'], { replaceUrl: true });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getUserRole(): string {
    const token = this.getToken();
    if (!token) return '';

    try {
      const payloadPart = token.split('.')[1];
      const base64 = payloadPart.replace(/-/g, '+').replace(/_/g, '/');
      const json = decodeURIComponent(atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join(''));
      const payload = JSON.parse(json);
      return payload.role ? payload.role.toLowerCase() : '';
    } catch (error) {
      console.error('Invalid token format:', error);
      return '';
    }
  }
}