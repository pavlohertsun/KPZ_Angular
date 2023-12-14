import { Pipe, PipeTransform } from '@angular/core';
import {ITrip} from "../models/trip";

@Pipe({
  name: 'filterTrips',
  standalone: true
})
export class FilterTripsPipe implements PipeTransform {

  transform(trips: ITrip[], search: string, searchKey: string): ITrip[] {
    // @ts-ignore
    if (!search || search.trim() === '' || searchKey === '') {
      return trips;
    }

    // @ts-ignore
    return trips.filter(trip => {
      // @ts-ignore
      const fieldValue = (trip[searchKey] as string)?.toLowerCase();
      return fieldValue && fieldValue.includes(search.toLowerCase());
    });
    //   return trips.filter(trip => {
    //     const startPoint = trip.start_point?.toLowerCase(); // Safe Navigation Operator
    //     return startPoint && startPoint.includes(search.toLowerCase());
    //   });
  }

}
