import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {ILoginCustomerInfo} from "../../models/login_customer";
import {HttpStatusCode} from "@angular/common/http";
import {take} from "rxjs";
import {LoginApprovedFailedDirective} from "../../directives/login-approved-failed.directive";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    LoginApprovedFailedDirective
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  accessDenied:boolean = false;
  form = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required
    ]),
    password: new FormControl<string>('', [
      Validators.required
    ])
  })
  constructor(private loginService: LoginService, private router: Router) {
  }
  login(){
    const customer: ILoginCustomerInfo = {
      // @ts-ignore
      email: this.form.value.email,
      // @ts-ignore
      password: this.form.value.password
    };
    this.loginService.login(customer)
      .pipe(take(1))
      .subscribe({
        next: (response: HttpStatusCode) => {
          console.log('Login successful:', response);
          this.router.navigate(['/customer']).then(r => ['/']);
          this.accessDenied = false;
        },
        error: (error: any) => {
          console.error('Login failed:', error);
          this.accessDenied = true;
        },
        complete: () => {
          // Optional: Code to run when the observable is completed
        }
      });
  }
}
