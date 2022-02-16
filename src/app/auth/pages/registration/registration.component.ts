import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/authService.service';
import { Usuari } from '../../interface/usuari.interface';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  //* FORMS
  registrationForm: FormGroup = this.fb.group({
    registrationUserName: [null, [Validators.required, Validators.minLength(2)]],
    registratiomEmail: [null, [Validators.required, Validators.email]],
    registrationPassw: [null, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]],
  });
  ngOnInit(): void {
  }

  registration() {
    let userToRegister: Usuari = {
      userName: this.registrationForm.value.registrationUserName,
      email: this.registrationForm.value.registratiomEmail,
      passw: this.registrationForm.value.registrationPassw,
      //* AFEGIR CURS GRATUÏT A L'USUARI QUE ES DONA D'ALTA
      cursos: [1]
    }
    // REGISTRATE USER
    this.authService.registre(userToRegister);
    // LOGIN THE NEW USER
    this.authService.loginNOU(userToRegister.email);
    // IF THE LOGIN HAS BEEN SUCCESSFUL, WE UPDATE THE USER'S COURSES
    this.authService.saberSiUsuariHaFetLogIn().subscribe(resp => {
      if (resp == true) {
        this.authService.updateNewUserCoursesData();
        this.router.navigateByUrl('cursos/userPage').then(() => {
          window.location.reload();
        });
      }
    })
  }

  reset(form: FormGroup) {
    form.reset();
  }
}
