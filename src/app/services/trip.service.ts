import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITrip} from "../models/trip";

@Injectable({
  providedIn: 'root'
})
export class TripService{
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<ITrip[]>{
    return this.http.get<ITrip[]>("http://localhost:8080/trip")
  }
}
