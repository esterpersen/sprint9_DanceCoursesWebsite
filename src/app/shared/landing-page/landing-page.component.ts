import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/authService.service';

export interface InfoFromContactForm {
  contactFormUserName: '',
  contactFormEmail: '',
  contactFormMessage: '',
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }
  courseToBePurchased!: number;

  infoFromContactForm !: InfoFromContactForm;

  ngOnInit(): void {
  }

  // PRETEND-TO-BUY-A-COURSE PROCESS
  unlockACourse(course: number) {
    this.courseToBePurchased = course;
    localStorage.setItem("courseToBePurchased", JSON.stringify(this.courseToBePurchased));

    this.authService.saberSiUsuariHaFetLogIn().subscribe(resp => {
      // IF THE USER IS LOGGED IN -> WE STORE THIS NEW COURSE INTO THEIR COURSE ARRAY.
      if (resp == true) {
        // If the user is logged in, and wants to add a new course to their profile, we call the method in the authService to update the user's courses
        this.authService.updateNewUserCoursesData();

        // If all's correct, we redirect the user to the userPage:
        this.router.navigateByUrl('cursos/userPage').then(() => {
          window.location.reload();
        });
      }
      // IF THE USER IS NOT LOGGED IN -> WE TAKE THEM TO THE LOGIN PAGE AND WE'LL HANDLE IT FROM THERE
      else if (resp == false) {
        this.router.navigateByUrl('/auth/login');
      }
    })

  }

  // CONTACT FORM
  contactForm: FormGroup = this.fb.group({
    contactFormUserName: [null, [Validators.required, Validators.minLength(2)]],
    contactFormEmail: [null, [Validators.required, Validators.email]],
    contactFormMessage: [null, [Validators.required, Validators.minLength(10)]],
  });

  // FAKE-SEND THE MESSAGE
  sendMessage() {
    // Capture data from the contactForm
    let infoFromContactFormWithData = {
      contactFormUserName: this.contactForm.value.contactFormUserName,
      contactFormEmail: this.contactForm.value.contactFormEmail,
      contactFormMessage: this.contactForm.value.contactFormMessage,
    }

    this.infoFromContactForm = infoFromContactFormWithData;

    alert(
      'Maururu ' + this.infoFromContactForm.contactFormUserName + '. We will respond to this email address: ' + this.infoFromContactForm.contactFormEmail + '.'
    )

  }
  reset(form: FormGroup) {
    form.reset();
  }
}

