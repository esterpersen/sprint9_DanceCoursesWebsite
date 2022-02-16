import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/authService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void { }

  //* FORM
  loginForm: FormGroup = this.fb.group({
    loginEmail: [null, [Validators.required, Validators.email]],
    loginPassw: [null, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]]
  });

  login() {
    let loginEmail: string = this.loginForm.value.loginEmail;
    let loginPassw: string = this.loginForm.value.loginPassw;

    this.authService.loginNOU(loginEmail);
    // If the login has been successful, we update the coursesArray from the user, and re-direct to the userPage
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
