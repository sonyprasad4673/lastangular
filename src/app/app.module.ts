import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as PlotlyJs from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { GraphsComponent } from './graphs/graphs.component';
import { BevaregesComponent } from './bevareges/bevareges.component';
import { ParentCComponent } from './parent-c/parent-c.component';
import { AppParentComponent } from './app-parent/app-parent.component';
import { AppChildComponent } from './app-child/app-child.component';
import { ImageCompressComponent } from './image-compress/image-compress.component';
import {
  FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule
} from 'angularx-social-login';


import { YoutubeComponent } from './youtube/youtube.component';
import { OAuthModule } from 'angular-oauth2-oidc';

PlotlyModule.plotlyjs = PlotlyJs;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    HomeComponent,
    GraphsComponent,
    BevaregesComponent,
    ParentCComponent,
    AppParentComponent,
    AppChildComponent,
    ImageCompressComponent,

    YoutubeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PlotlyModule,
    SocialLoginModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    {
      provide : 'SocialAuthServiceConfig',
      useValue: {
        autologin: false,
        providers: [
          {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('1049217402677467')
          }],
          onError: (err: any) => {
            console.error(err);
          }
        } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
