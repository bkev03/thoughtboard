import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from '../models/User';

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
export class MenuComponent {
  @Input() sidenav!: MatSidenav;
  @Input() isLoggedIn: boolean = false;
  @Input() currentUser?: User;

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
    window.location.href = '/home'
  }

  closeSidenav() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }
}
