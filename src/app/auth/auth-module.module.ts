import { NgModule } from '@angular/core';
import {LoginPageComponent} from '../login-page/login-page.component';
import {CanactGuard} from '../canact/canact.guard';
import {RegisterPageComponent} from '../register-page/register-page.component';
import {ExitAboutGuard} from '../exit.about.guard';
import {RouterModule} from '@angular/router';

const routes = [
  {path: 'login', component: LoginPageComponent,
    canActivate: [CanactGuard]},
  {path: 'register', component: RegisterPageComponent,
    canDeactivate: [ExitAboutGuard]}
    ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleModule { }
