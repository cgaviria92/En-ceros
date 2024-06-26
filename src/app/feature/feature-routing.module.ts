import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './users/home-user/home-user.component';
import { TokenGuard } from '../core/guard/token/token.guard';

const routes: Routes = [
  {
    path: 'users',
    component: HomeUserComponent,
    canActivate: [TokenGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
