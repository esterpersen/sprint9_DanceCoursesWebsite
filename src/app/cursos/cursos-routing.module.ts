
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserPageComponent } from './pages/user-page/user-page.component';
import { CursComponent } from './components/curs/curs.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'userPage',
        component: UserPageComponent,
        children: [
          // { path: 'curs/:url', component: CursComponent}
        ]
      },

      {
        path: '**',
        redirectTo: 'userPage'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
