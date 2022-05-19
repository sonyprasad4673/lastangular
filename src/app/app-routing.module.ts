import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GraphsComponent } from './graphs/graphs.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanActivate } from '@angular/router';
import { BevaregesComponent } from './bevareges/bevareges.component';
import { ParentCComponent } from './parent-c/parent-c.component';
import { AppChildComponent } from './app-child/app-child.component';
import { AppParentComponent } from './app-parent/app-parent.component';
import { ImageCompressComponent } from './image-compress/image-compress.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: 'bevarges', component: BevaregesComponent },
  { path: 'parentC', component: ParentCComponent },
  { path: 'app-child', component: AppChildComponent },
  { path: 'app-parents', component: AppParentComponent },
  { path: 'image-compress', component: ImageCompressComponent },
  { path: 'youtube', component: YoutubeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
