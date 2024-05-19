import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {

  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('token');  // Eliminar el token del localStorage
    this.router.navigate(['/login']);  // Redirigir al usuario a la página de login
  }
}

