import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  
  getFreshData(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }
  
  ngOnInit(): void {
    this.getFreshData();
  }
}
