import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true
})
export class MenuComponent implements OnDestroy {
  @Input() sidenav!: MatSidenav;
  @Input() isLoggedIn: boolean = false;
  @Input() currentUser?: User;
  @Output() logoff: EventEmitter<boolean> = new EventEmitter();

  private authSubscription?: Subscription;

  constructor(
    private authService: AuthService
  ) {}

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.onLogoff();
      this.closeSidenav();
    })
  }

  closeSidenav(): void {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  onLogoff(): void {
    this.logoff.emit(true);
  }


}
