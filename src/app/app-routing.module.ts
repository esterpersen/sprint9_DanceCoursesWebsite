import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

import { LandingPageComponent } from './shared/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
