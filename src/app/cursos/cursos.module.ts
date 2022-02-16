import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';

import { SharedModule } from '../shared/shared.module';

import { UserPageComponent } from './pages/user-page/user-page.component';

import { CursComponent } from './components/curs/curs.component';
import { LessonComponent } from './components/lesson/lesson.component';

import { UserCardComponent } from '../shared/user-card/user-card.component';


@NgModule({
  declarations: [
    UserPageComponent,
    CursComponent,
    LessonComponent,
    UserCardComponent 
  ],
  imports: [
    CommonModule,
    CursosRoutingModule, 
    SharedModule
  ]
})
export class CursosModule { }
