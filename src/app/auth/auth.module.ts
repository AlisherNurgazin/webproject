import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from '../login-page/login-page.component';
import {RegisterPageComponent} from '../register-page/register-page.component';
import {ExitAboutGuard} from '../exit.about.guard';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule
  ],
  providers: [ExitAboutGuard],
  exports: [LoginPageComponent, RegisterPageComponent]
})
export class AuthModule { }
