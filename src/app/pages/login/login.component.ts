import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { UserService } from '../../shared/services/user.service';
import { AppComponent } from '../../app.component';

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
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  })

  loginError: string = '';

  constructor(private router: Router, private userService: UserService, private appComponent: AppComponent) {}

  onLogin(): void {
    this.loginError = '';
    
    const email = this.loginForm.value?.email || '';
    const password = this.loginForm.value?.password || '';
    let foundUserWithThisEmail = this.userService.getUsers().find(u => u.email === email);

    if (!foundUserWithThisEmail) {
      this.loginError = 'No such user with this email.';
      return;
    }

    if (foundUserWithThisEmail.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(foundUserWithThisEmail));
      this.appComponent.getFreshData();
      this.router.navigateByUrl('/home');
    } else {
      this.loginError = 'Incorrect password.';
    }
  }
}
