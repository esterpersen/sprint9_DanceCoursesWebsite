import { Lesson } from './../../interfaces/curs.interface';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit, OnChanges {

  currentLesson!: Lesson;
  @Input() clickedLessonInCursPage !: Lesson;

  constructor() { }

  ngOnInit(): void {
    this.currentLesson = this.clickedLessonInCursPage;
  }

  // Updates the currentLesson value every time there is a change in the value received from the curs.comp.html via <app-lesson>
  ngOnChanges(changes: SimpleChanges) {
    this.currentLesson = changes['clickedLessonInCursPage'].currentValue;
  }

}
