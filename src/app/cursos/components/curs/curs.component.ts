import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Curs } from '../../interfaces/curs.interface';

@Component({
  selector: 'app-curs',
  templateUrl: './curs.component.html',
  styleUrls: ['./curs.component.css']
})
export class CursComponent implements OnInit, OnChanges {

  currentCurs!: Curs;
  @Input() clickedCurs !: Curs;

  clickedLesson: number = -1;

  constructor() { }

  ngOnInit(): void {
    this.currentCurs = this.clickedCurs;
  }

  // Updates the currentCurs value every time there is a change in the value received from the user-page.comp.html via <app-curs>
  ngOnChanges(changes: SimpleChanges) {
    this.currentCurs = changes['clickedCurs'].currentValue;    
  }

  loadingALesson(x: number) {
    this.clickedLesson = x;
  }
}
