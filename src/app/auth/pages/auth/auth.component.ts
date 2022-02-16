import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuari } from '../../interface/usuari.interface';
import { AuthService } from '../../service/authService.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public loggedInUser!: Usuari;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.saberSiUsuariHaFetLogIn().subscribe(resp => {
      if (resp == true) {
        this.loggedInUser = this.authService.obtenirNouUsuari_localStorage();
      }
    });
  }

  logout() {
    this.authService.esborrarCurrentSession_localStorage();
    if (!this.authService.usuariRegistrat == null) {
      this.authService.usuariRegistrat.userName = "";
    }
    // reset the loggedInUser for the next user's session
    this.loggedInUser = { userName: "", email: "", passw: "" };

    this.router.navigateByUrl('home').then(() => {
      window.location.reload();
    });
  }

}
