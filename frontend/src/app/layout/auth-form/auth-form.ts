import { Component, inject, model } from '@angular/core';
import { Auth } from '../../services/auth/auth';
import { regiserModel, loginModel } from '../../models/auth';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


export type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss'
})
export class AuthForm {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  });

  loginForm = new FormGroup({
    username_or_email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  mode = model<AuthMode>('login');

  setMode(mode: AuthMode) {
    this.mode.set(mode);
  }

  private auth = inject(Auth);

  register() {
    if (this.registerForm.invalid) {
      return;
    }

    const data: regiserModel = {
      username: this.registerForm.value.username!,
      email: this.registerForm.value.email!,
      password: this.registerForm.value.password!
    }

    this.auth.register(data).subscribe({
      next: () => {
        console.log("login");
      },
      error: error => {
        console.error('failed');
      }});
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const data: loginModel = {
      usernameOrEmail: this.loginForm.value.username_or_email!,
      password: this.loginForm.value.password!
    }

    this.auth.login(data).subscribe({
      next: () => {
        console.log("login");
      },
      error: error => {
        console.error('failed');
      }});
  } 
}