import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReadableDatePipe } from '../../shared/pipes/date.pipe';
import { ReadableRolePipe } from '../../shared/pipes/role.pipe';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardModule } from '@angular/material/card';
import { User } from '../../shared/models/User';
import { Timestamp } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { Auth } from '@angular/fire/auth';

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
export class ProfileComponent implements OnInit, OnDestroy {
  user: User | null = null;

  constructor(
    private userService: UserService,
    private auth: Auth
  ) {}

  isLoggedIn: boolean = false;

  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.subscription = this.userService.getProfile().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.error('Error loading profile:', error);
      }
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
