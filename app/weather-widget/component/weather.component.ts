import { Component } from "@angular/core";

import { WeatherService } from "../service/weather.service";

@Component( {
  moduleId: module.id,
  providers: [ WeatherService ],
  selector: "weather-widget",
  styleUrls: [ "weather.component.css" ],
  templateUrl: "weather.component.html",
} )

export class WeatherComponent {
  constructor( private service: WeatherService ) {
    this.service.getCurrentLocation( );
  }
}
