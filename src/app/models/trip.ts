import {ICustomer} from "./customer";
import {IDriver} from "./driver";

export interface ITrip{
  id : number,
  start_time : string,
  end_time : string,
  start_point : string,
  destination_point : string,
  price : number,
  description : string,
  customer : ICustomer,
  driver : IDriver
}
