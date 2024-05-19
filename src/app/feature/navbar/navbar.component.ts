import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';  // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {

  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}

