import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, Subject } from 'rxjs';

const OAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId:
    '118731653904-emdpc4oe1fo8v496mplhfj107j2ccl7l.apps.googleusercontent.com',
  scope: 'openid profile email https://www.googleapis.com/auth/gmail.readonly',
  // showDebugInformation: true,
};
export interface UserInfo {
  info: {
    sub: string; // indentifeir to user
    email: string;
    name: string;
    picture: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  gmail = 'https://gmail.googleapis.com';

  userProfileSubject = new Subject<UserInfo>()

  constructor(
    private readonly OAuthService: OAuthService,
    private readonly httpclients: HttpClient
  ) {
    // OAuthService.configure(OAuthConfig);
    // OAuthService.logoutUrl = 'https://www.google.om/accounts/logout';
    // OAuthService.loadDiscoveryDocument().then(() => {
    // OAuthService.tryLoginImplicitFlow().then(() => {
    // if (OAuthService.hasValidAccessToken()) {
    // OAuthService.initLoginFlow();
    // } else {
    // OAuthService.loadUserProfile().then((userprofile) => {
    // console.log(JSON.stringify(userprofile));
    // });
    // }
    // });
    // });
  }
  googlemaillogin() {
    this.OAuthService.configure(OAuthConfig);
    this.OAuthService.logoutUrl = 'https://www.google.om/accounts/logout';
    this.OAuthService.loadDiscoveryDocument().then(() => {
      this.OAuthService.tryLoginImplicitFlow().then(() => {
        if (!this.OAuthService.hasValidAccessToken()) {
          this.OAuthService.initLoginFlow();
        } else {
          this.OAuthService.loadUserProfile().then((userprofile) => {
            this.userProfileSubject.next(userprofile as UserInfo)
            console.log(JSON.stringify(userprofile));
          });
        }
      });
    });
  }
  emails(userId: string): Observable<any> {
    return this.httpclients.get(
      `${this.gmail}/gmail/v1/users/${userId}/messages`,
      { headers: this.authHeader() }
    );
  }
  getMail(userId: string, mailId: string): Observable<any> {
    return this.httpclients.get(
      `${this.gmail}/gmail/v1/users/${userId}/messages/${mailId}`,
      { headers: this.authHeader() }
    );
  }

  isLoggedIn(): boolean {
    return this.OAuthService.hasValidAccessToken();
  }
  signOut() {
    this.OAuthService.logOut();
  }
  private authHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.OAuthService.getAccessToken()}`,
    });
  }
}
