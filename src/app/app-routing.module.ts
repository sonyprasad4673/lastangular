import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "/home"},
  {path: 'home', component:HomeComponent},
  {path: "header", component:HeaderComponent},
  {path:"about us",component:AboutUsComponent},
  {path:"login",component:LoginComponent},
  {path:"contact-us",component:ContactUsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
