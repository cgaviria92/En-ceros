import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private readonly router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Método implementado para inicializar componentes, actualmente vacío.
  }

  onSubmit(): void {
    if (!this.email || !this.password || this.password.length < 8) {
      // Validaciones adicionales pueden ser manejadas aquí si es necesario
      return;
    }

    this.http.post('https://reqres.in/api/login', {
      email: this.email,
      password: this.password
    }).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.redirectUsers();
    }, error => {
      console.error('Login failed', error);
    });
  }

  /**
   * Este método no se puede modificar
   */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
