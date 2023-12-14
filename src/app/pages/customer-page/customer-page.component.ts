import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TripInfoContainerComponent} from "../../components/trip-info-container/trip-info-container.component";
import {NavbarComponentComponent} from "../../components/navbar-component/navbar-component.component";
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";
import {FilterTripsPipe} from "../../pipes/filter-trips.pipe";
import {FormsModule} from "@angular/forms";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-customer-page',
  standalone: true,
  imports: [TripInfoContainerComponent, NavbarComponentComponent, CommonModule, FilterTripsPipe, FormsModule],
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.css'
})
export class CustomerPageComponent implements OnInit{
  term: string;
  parameter: string;
  constructor(protected dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    console.log("ngOnInit called in CustomerPageComponent");
    this.dataService.trips$.subscribe((trips) => {
      console.log("Received trips in CustomerPageComponent", trips);
    });
  }

  navigateToTripDetails(tripId: number | undefined): void {
    this.router.navigate(['/customer/trip', tripId]).then(r => '/customer');
  }
}
