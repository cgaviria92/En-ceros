import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    NavBarComponent,
    HomeUserComponent,
    ListUsersComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsersRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    NavBarComponent,
    HomeUserComponent,
    ListUsersComponent,
    CreateUserComponent
  ]
})
export class UsersModule { }
