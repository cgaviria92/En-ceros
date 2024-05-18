import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HomeUserComponent,
    ListUsersComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    HomeUserComponent,
    ListUsersComponent,
    CreateUserComponent
  ]
})
export class UsersModule { }
