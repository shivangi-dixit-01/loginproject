import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateListComponent } from './create-list/create-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, },
  {path: 'register', component: RegisterComponent},
  {path: 'createUser', component: CreateUserComponent},
  {path: 'userlist', component: UserslistComponent},
  {path: 'createlist', component: CreateListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
