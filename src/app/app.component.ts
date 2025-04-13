import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from './shared/models/User';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MenuComponent,
    MatSidenav,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'thoughtboard';
  isLoggedIn = false;
  currentUser?: User;

  ngOnInit(): void {
    this.getFreshData();
  }

  getFreshData(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    }
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
    window.location.href = '/home'
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }
}
