import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TempConverterComponent } from './component/temp-converter/temp-converter.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';

//Valid URLS for the system
const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "login", component: UserLoginComponent},
  {path:"converter", component: TempConverterComponent},
  {path: "user/register", component: UserRegisterComponent},
  {path: "user/list", component: UserListComponent},
  {path: "todoList", component: TodoListComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
