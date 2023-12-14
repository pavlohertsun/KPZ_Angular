import {Component, Input} from '@angular/core';
import {ITrip} from "../../models/trip";
import {CurrencyPipe, getCurrencySymbol} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-trip-info-container',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './trip-info-container.component.html',
  styleUrl: './trip-info-container.component.css'
})
export class TripInfoContainerComponent {
  @Input() trip: ITrip

  constructor(private router: Router) {
  }
  navigateToDetails(): void {
    this.router.navigate(['/customer/trip', this.trip?.id]).then(r => 'customer');
  }
}
