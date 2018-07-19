import { Component } from "@angular/core";

import { Weather } from "../model/weather";
import { WeatherService } from "../service/weather.service";

@Component( {
  moduleId: module.id,
  providers: [ WeatherService ],
  selector: "weather-widget",
  styleUrls: [ "weather.component.css" ],
  templateUrl: "weather.component.html",
} )

export class WeatherComponent {
  private pos: Position;
  private weatherData = new Weather( null, null, null, null, null );

  constructor( private service: WeatherService ) {
    this.service.getCurrentLocation()
      .subscribe( ( position ) => {
        this.pos = position;
        this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)
          .subscribe( ( weather ) => console.log( weather ),
            ( err ) => console.error( err ) );
    },
    ( err ) => console.error( err ) );
  }
}
