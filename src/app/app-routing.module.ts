import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './feature/users/home-user/home-user.component';
import { ListUsersComponent } from './feature/users/list-users/list-users.component';
import { CreateUserComponent } from './feature/users/create-user/create-user.component';
import { LoginComponent } from './feature/login/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeUserComponent },
  { path: 'users/list', component: ListUsersComponent },
  { path: 'users/create', component: CreateUserComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
