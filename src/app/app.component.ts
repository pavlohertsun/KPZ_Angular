import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ITrip} from "./models/trip";
import {TripService} from "./services/trip.service";
import {DataService} from "./services/data.service";
import {TripInfoContainerComponent} from "./components/trip-info-container/trip-info-container.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TripInfoContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Taxi';
  trips: ITrip[] = [];
  constructor(private tripService: TripService, private dataService: DataService) {
  }
  ngOnInit() {
    this.tripService.getAll().subscribe(trips => {
      this.trips = trips;
      this.dataService.setTrips(this.trips);
    })
  }

}
