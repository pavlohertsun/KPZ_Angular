import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent} from "../../pages/login-page/login-page.component";
import { LoginService} from "../../services/login.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, LoginPageComponent
  ],
  providers: [LoginService]
})
export class AuthModule { }
