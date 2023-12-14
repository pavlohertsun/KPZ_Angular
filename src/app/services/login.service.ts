import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpStatusCode} from "@angular/common/http";
import {ILoginCustomerInfo} from "../models/login_customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  constructor(private http: HttpClient) {
  }
  login(customer: ILoginCustomerInfo): Observable<HttpStatusCode>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<HttpStatusCode>('http://localhost:8080/customer/login', customer, {headers})
  }
}
