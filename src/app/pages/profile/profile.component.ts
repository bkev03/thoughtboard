import { Component, OnInit } from '@angular/core';
import { ReadableDatePipe } from '../../shared/pipes/date.pipe';
import { ReadableRolePipe } from '../../shared/pipes/role.pipe';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardModule } from '@angular/material/card';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-profile',
  imports: [
    MatCard,
    MatCardModule,
    MatIconModule,
    ReadableDatePipe,
    ReadableRolePipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true
})
export class ProfileComponent implements OnInit {
  currentUser: User = {
    nickname: 'testuser',
    name: {
      firstname: 'Test',
      lastname: 'User'
    },
    signupDate: new Date(2016, 6, 23, 12, 30, 32, 25),
    email: 'test@email.com',
    password: 'testpassword',
    role: "ROLE_USER"
  }

  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.checkLoggedInStatus();
  }

  checkLoggedInStatus(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    }
  }

}
