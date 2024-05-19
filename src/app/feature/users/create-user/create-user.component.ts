import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../core/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  name: string = '';
  job: string = '';

  constructor(
    private readonly router: Router,
    private usersService: UsersService  // Inyectamos el servicio de usuarios
  ) {}

  ngOnInit(): void {
    
  }

  createUser(): void {
    if (this.name && this.job) {
      this.usersService.createUser({ name: this.name, job: this.job }).subscribe(response => {
        alert(`Usuario ${response.name} creado`);
        this.redirectToListUsers();
      });
    }
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
