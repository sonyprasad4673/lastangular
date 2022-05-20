import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserInfo } from '../google-api.service';
import { forbiddenNameValidator } from '../user-name.validator';
import { lastValueFrom } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})

export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  userInfo?: UserInfo
  mailSnippets: string[] = [];

  user!: SocialUser;
  loggedIn!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private readonly googleApi: AuthServiceService, private authService: SocialAuthService) {
    this.googleApi.userProfileSubject.subscribe((info: any) => {
      console.log('==========', info);

      this.userInfo = info
    })
   
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          forbiddenNameValidator,
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
      city: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  MustMatch(ControlName: string, matchingControlName: string) {
    return (FormGroup: FormGroup) => {
      const control = FormGroup.controls[ControlName];
      const MatchingControl = FormGroup.controls[matchingControlName];
      if (MatchingControl.errors && !MatchingControl.errors['MustMatch']) {
        return;
      }
      if (control.value !== MatchingControl.value) {
        MatchingControl.setErrors({ MustMatch: true });
      } else {
        MatchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  logingm(): void {
    this.googleApi.googlemaillogin();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }

  async getEmails() {
    if (!this.userInfo) {
      return;
    }

    const userId = this.userInfo?.info.sub as string
    const messages = await lastValueFrom(this.googleApi.emails(userId))
    messages.messages.forEach((element: any) => {
      const mail = lastValueFrom(this.googleApi.getMail(userId, element.id))
      mail.then(mail => {
        this.mailSnippets.push(mail.snippet)
      })
    });
  }
  signwithFB(): void{
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }

  signOut() : void{
    this.authService.signOut();
  }

}
function refreshToken() {
  throw new Error('Function not implemented.');
}

