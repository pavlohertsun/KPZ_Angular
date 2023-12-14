import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {CustomerPageComponent} from "./pages/customer-page/customer-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";

export const routes: Routes = [
  {path: "login", component: LoginPageComponent},
  {path: "", component: HomePageComponent},
  {path: "register", component: SignupPageComponent},
  {path: "customer", component: CustomerPageComponent},
  {path: "profile", component: ProfilePageComponent}
];
