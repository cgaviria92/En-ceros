import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { AuthService } from '../../../core/services/auth.service';  // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: any[] = [];
  searchText: string = '';

  constructor(private usersService: UsersService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService.getUsers().subscribe(response => {
      this.users = response.data;
    });
  }

  deleteUser(id: number, name: string): void {
    this.usersService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
      alert(`Usuario ${name} eliminado`);
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
