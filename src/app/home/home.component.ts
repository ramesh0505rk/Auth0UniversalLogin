import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  user$ = this.authService.user$

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout({ logoutParams: { returnTo: 'http://localhost:4200' } });
  }
}
