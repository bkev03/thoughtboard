import { Component, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { UserService } from '../../shared/services/user.service';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatCard,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent implements OnDestroy {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  })

  loginError: string = '';
  authSubscription?: Subscription;

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private appComponent: AppComponent) {}

  onLogin(): void {
    this.loginError = '';
    
    const email = this.loginForm.value?.email || '';
    const password = this.loginForm.value?.password || '';

    if (this.loginForm.invalid) {
      this.loginError = "Email or password is in invalid format."
      return;
    }

    this.loginError = '';

    this.authService.login(email, password)
      .then(userCredential => {
        console.log('Login successful:', userCredential.user);
        this.authService.updateIsLoggedInStatus(true);
        this.router.navigateByUrl('/home');
      })
      .catch(error => {
        console.error('Login error:', error);

        switch(error.code) {
          case 'auth/user-not-found':
            this.loginError = 'No user found with this email address';
            break;
          case 'auth/wrong-password':
            this.loginError = 'Incorrect password';
            break;
          case 'auth/invalid-credential':
            this.loginError = 'Invalid email or password';
            break;
          default:
            this.loginError = 'Authentication failed. Please try again later.';
        }
      })
  }

  ngOnDestroy(): void {
      this.authSubscription?.unsubscribe();
  }
}
