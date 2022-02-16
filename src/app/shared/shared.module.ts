import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class SharedModule { }
