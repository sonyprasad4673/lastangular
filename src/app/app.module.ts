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
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from 'angularx-social-login';
import { YoutubeComponent } from './youtube/youtube.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RestComponent } from './rest/rest.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AgGridModule } from 'ag-grid-angular';
import { ScrollComponent } from './scroll/scroll.component';
import { NgChartsModule } from 'ng2-charts';
import { AgngularGridComponent } from './agngular-grid/agngular-grid.component';
import { ModuleRegistry } from 'ag-grid-community';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { MedalCellRendererComponent } from './medal-cell-renderer/medal-cell-renderer.component';
import { TotalValueRendererComponent } from './total-value-renderer/total-value-renderer.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';





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
    RestComponent,
    ScrollComponent,
    AgngularGridComponent,
    MedalCellRendererComponent,
    TotalValueRendererComponent,
    StudentDashboardComponent,








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
    Ng2SearchPipeModule,
    Ng2OrderModule,
    InfiniteScrollModule,
    NgxPaginationModule,
    AgGridModule.withComponents([AppComponent,MedalCellRendererComponent,TotalValueRendererComponent]),
    NgChartsModule,







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
export class AppModule { }
