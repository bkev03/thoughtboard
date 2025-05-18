import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { Timestamp } from '@angular/fire/firestore';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-signup',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatCard,
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  standalone: true
})
export class SignupComponent {

  constructor(
    private router: Router, 
    private authService: AuthService
  ) {}

  signupForm = new FormGroup({
      nickname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormGroup({
        firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
        lastname: new FormControl('', [Validators.required, Validators.minLength(2)])
      }),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordConfirm: new FormControl('', [Validators.required])
    });

    signupError: string[] = [];

  onSignup(): void {
    this.signupError = []

    if (this.signupForm.invalid) {
      return;
    }

    const password = this.signupForm.get('password');
    const passwordConfirm = this.signupForm.get('passwordConfirm');
    
    if (password?.value !== passwordConfirm?.value) {
      this.signupError.push("Your passwords don't match!");
      return;
    }

    const userData: Partial<User> = {
      nickname: this.signupForm.get('nickname')?.value || '',
      name: {
        firstname: this.signupForm.get('name')?.get('firstname')?.value || '',
        lastname: this.signupForm.get('name')?.get('lastname')?.value || ''
      },
      signupDate: Timestamp.now(),
      email: this.signupForm.get('email')?.value || '',
      role: 'ROLE_USER'
    }

    const email = this.signupForm.value.email || '';
    const pword = this.signupForm.value.password || '';

    this.authService.signUp(email, pword, userData)
      .then(userCredential => {
        console.log('Signup successful:', userCredential.user);
        this.authService.updateIsLoggedInStatus(true);
        this.router.navigateByUrl('/home');
      })
      .catch(error => {
        console.error('Registration error:', error);
        
        switch(error.code) {
          case 'auth/email-already-in-use':
            this.signupError.push('This email is already in use.');
            break;
          case 'auth/invalid-email':
            this.signupError.push('Invalid email.');
            break;
          case 'auth/weak-password':
            this.signupError.push("Weak password: Use at least 6 characters.");
            break;
          default:
            this.signupError.push("An error has occurred during signing up. Please try again.")    
        }
      });

    this.router.navigateByUrl('/login');
  }
}
