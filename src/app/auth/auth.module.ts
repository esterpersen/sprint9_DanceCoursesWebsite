import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, ReactiveFormsModule
  ]
})
export class AuthModule { }
