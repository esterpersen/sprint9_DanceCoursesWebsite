import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuari } from '../interface/usuari.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
    //* ADD COURSES TO THE TESTUSER 
    this.usuariDeMostra.cursos?.push(1, 2, 3);

    //* SAVE THE TEST USER IN THE localStorage
    localStorage.setItem("usuari de mostra", JSON.stringify(this.usuariDeMostra));

    //* GET THE TEST USER DATA
    this.obtenir_localStorageDeProva();
  }

  currentUser!: Usuari;

  //* TEST USER
  private _usuariDeProva: Usuari = {
    userName: "Josep Maria Dominguez",
    email: "jm@gmail.cat",
    passw: "3lB1nquer",
    cursos: []
  };

  //* REGISTERED USER TEMPLATE
  private _usuariRegistrat: Usuari = {
    userName: "",
    email: "",
    passw: "",
    cursos: []
  };

  //* GETTERS & SETTER
  get usuariDeMostra(): Usuari {
    return this._usuariDeProva;
  }
  get emailUsuariDeProva(): string {
    return this.obtenir_localStorageDeProva().email;
  }

  get usuariRegistrat(): Usuari {
    return this._usuariRegistrat;
  }
  set guardarUsuariRegistrat(user: Usuari) {
    this._usuariRegistrat = user;
  }
  get emailUsuariRegistrat() {
    return JSON.parse(localStorage.getItem("Nou Usuari")!)?.email;
  }

  //* localStorage METHODS  
  public obtenir_localStorageDeProva(): Usuari {
    let usuariDeMostra = JSON.parse(localStorage.getItem("usuari de mostra")!);
    return usuariDeMostra;
  }

  registrarNouUsuari_localStorage(user: Usuari): void {
    localStorage.setItem("Nou Usuari", JSON.stringify(user));
  }
  public obtenirNouUsuari_localStorage(): Usuari {
    this.currentUser = JSON.parse(localStorage.getItem("Nou Usuari")!)
    return this.currentUser;
  }

  ferLogin_localStorage(emailUser: string) {
    localStorage.setItem("Usuari logged in", JSON.stringify(emailUser));
  }
  public obtenirLogin_localStorage(): Observable<boolean> {
    return JSON.parse(localStorage.getItem("Usuari logged in")!);
  }

  public esborrarCurrentSession_localStorage() {
    localStorage.removeItem("Usuari logged in");
  }

  //* LOGIN METHOD
  loginNOU(emailEntrat: string): Observable<Usuari> {
    this.compararEmails("loginForm", emailEntrat, this.emailUsuariDeProva, this.emailUsuariRegistrat).subscribe(resp => {
      if (resp = true) {
        this.obtenirNouUsuari_localStorage();
        return of(this.currentUser);
      }
      return of(this.usuariDeMostra);
    });
    // If it hasn't found a registered user, we login with the registeredUser template (which is blank)
    return of(this.usuariRegistrat);
  }

  //* REGISTRATION METHODS
  registre(newUsuari: Usuari) {
    this.compararEmails("registreForm", newUsuari.email, this.emailUsuariDeProva, this.emailUsuariRegistrat).subscribe(resp => {
      if (resp == true) {
        // If the entered email is new and not registered, we register the user
        this.guardarUsuariRegistrat = newUsuari;
        // And save it in the localStorage
        this.registrarNouUsuari_localStorage(this.usuariRegistrat);
        console.log("Registre OK.");
      }
    });
  }

  //* COMMON METHODS
  //* COMPARE EMAILS TO SEE IF THE USER EXISTS
  compararEmails(deQuinForm: string, emailEscrit: string, emailUsuariDeProva: string, emailUsuariRegistrat?: string): Observable<boolean> {

    switch (deQuinForm) {

      case "loginForm":
        if (emailEscrit === emailUsuariRegistrat) {
          console.log("Login OK.");
          this.ferLogin_localStorage(emailEscrit);
          return of(true);
        } else if (emailEscrit === emailUsuariDeProva) {
          alert("This is the test user. Please create your own user.");
          this.router.navigateByUrl('/auth/registration');
          this.ferLogin_localStorage(emailUsuariDeProva);
          return of(true);
        } else {
          alert("This user is not registered. Kindly create an account.");
          this.router.navigateByUrl('/auth/registration');
          return of(false);
        }

      case "registreForm":
        if (emailEscrit === emailUsuariRegistrat) {
          alert("This user already exists. Kindly login.");
          this.router.navigateByUrl('/auth/login');
          return of(false);
        } else if (emailEscrit === emailUsuariDeProva) {
          alert("This is the test user. Please create your own user.");
          return of(false);
        } else {
          this.ferLogin_localStorage(emailEscrit);
          return of(true);
        }

      default:
        return of(false);
    }
  }

  //* HAS A USER LOGGED IN ALREADY?
  saberSiUsuariHaFetLogIn(): Observable<boolean> {
    if (!this.obtenirLogin_localStorage()) {
      return of(false);
    }
    return of(true);
  }

  //* UPDATE THE NEWUSER'S COURSES DATA
  updateNewUserCoursesData() {
    if (localStorage.getItem("courseToBePurchased") != null) {

      // We get the value of "courseToBePurchased" saved from the landing-page in the localStorage 
      let courseToBeAdded: number = JSON.parse(localStorage.getItem("courseToBePurchased")!);

      if (courseToBeAdded != 0) {
        // AVOID DUPPLICATES
        if (this.currentUser.cursos?.includes(courseToBeAdded) === false) {
          // IF it's not already in the cursos array, we push it.
          this.currentUser.cursos?.push(courseToBeAdded);
        }
        // Then we re-write the nouUsuari in the LocalStorage with the updated courses
        this.registrarNouUsuari_localStorage(this.currentUser);
      }
    }
  }

}