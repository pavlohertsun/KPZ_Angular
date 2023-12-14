import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ITrip} from "../models/trip";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private tripsSource = new BehaviorSubject<ITrip[]>([]);
  trips$ = this.tripsSource.asObservable();

  setTrips(trips: ITrip[]): void {
    this.tripsSource.next(trips);
  }
}
