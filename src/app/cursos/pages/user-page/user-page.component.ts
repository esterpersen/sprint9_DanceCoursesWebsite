import { CursService } from '../../services/curs.service';
import { Component, OnInit } from '@angular/core';
import { Curs } from '../../interfaces/curs.interface';
import { AuthService } from 'src/app/auth/service/authService.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public totalCursos: Curs[] = [];
  public activeCursos: Curs[] = [];
  clickedCourse: number = -1;

  constructor(private cursosService: CursService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getAllCoursesFromInMemoryDataService();
  }

  loadingACourse(x: number) {
    this.clickedCourse = x;
  }

  // FIRST -> GET ALL THE COURSES FROM THE in-memory-data.service
  getAllCoursesFromInMemoryDataService() {
    this.cursosService.getCursos().subscribe(resp => {
      this.totalCursos = resp;
      this.updateActiveCursos();
    })
  }

  // SECOND -> ADD THE PURCHASED COURSES TO THE activeCursos array BASED ON THE NouUsuari IN THE LocalStorage
  updateActiveCursos() {
    for (let value of this.authService.currentUser.cursos!) {
      for (let existingCurs of this.totalCursos) {
        if (value == existingCurs.id) {
          this.activeCursos.push(existingCurs);
        }
      }
    }
    // Reset the courseToBePurchased to 0 so it doesn't get added to the next user's courses array when they login
    localStorage.setItem("courseToBePurchased", JSON.stringify(0));
  }

}
