import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from '../../../model/model.class';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  onLogin() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res) => {
          this.auth.setToken(res.access_token);
          this.router.navigate(['/admin-dashboard']);
        },
        error: (error) => {
          alert('Invalid credentials')
          console.log(error)
        }
      });
  }
}
