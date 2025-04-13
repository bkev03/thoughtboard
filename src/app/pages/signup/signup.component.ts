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
  constructor(private router: Router, private userService: UserService) {
    
  }

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

    const newUser: User = {
      nickname: this.signupForm.get('nickname')?.value || '',
      name: {
        firstname: this.signupForm.get('name')?.get('firstname')?.value || '',
        lastname: this.signupForm.get('name')?.get('lastname')?.value || ''
      },
      signupDate: new Date(),
      email: this.signupForm.get('email')?.value || '',
      password: password?.value || '',
      role: 'ROLE_USER'
    }

    if (!this.userService.addUser(newUser)) {
      this.signupError.push('Nickname or email already in use.');
      return;
    }

    // JUST FOR TESTING:
    console.log("New user created:", newUser);

    this.router.navigateByUrl('/login');
  }
}
