import { Component, OnInit } from '@angular/core';
import { Usuari } from 'src/app/auth/interface/usuari.interface';
import { AuthService } from 'src/app/auth/service/authService.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  currentUser!: Usuari;

  ngOnInit(): void {
    this.authService.saberSiUsuariHaFetLogIn().subscribe(resp => {
      if (resp == true) {
        this.currentUser = this.authService.obtenirNouUsuari_localStorage();
      }
    });
  }
}
