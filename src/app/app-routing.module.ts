import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component:HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
 
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
