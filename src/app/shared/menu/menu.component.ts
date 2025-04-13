import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() logoff: EventEmitter<boolean> = new EventEmitter();

  logout(): void {
    this.onLogoff();
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
