import { Component, OnInit } from "@angular/core";

import { Weather } from "../model/weather";
import { WeatherService } from "../service/weather.service";

@Component( {
  moduleId: module.id,
  providers: [ WeatherService ],
  selector: "weather-widget",
  styleUrls: [ "weather.component.css" ],
  templateUrl: "weather.component.html",
} )

export class WeatherComponent implements OnInit {
  public pos: Position;
  private weatherData = new Weather( null, null, null, null, null );

  constructor( private service: WeatherService ) {  }

  public ngOnInit() {
    this.getCurrentLocation();
  }

  public getCurrentLocation() {
    this.service.getCurrentLocation()
      .subscribe( ( position ) => {
        this.pos = position;
        this.getCurrentWeather();
      },
      ( err ) => console.error( err ) );
  }

  public getCurrentWeather() {
    this.service.getCurrentWeather( this.pos.coords.latitude, this.pos.coords.longitude )
      .subscribe( ( weather ) => {
        this.weatherData.temp = weather["currently"]["temperature"],
        this.weatherData.wind = weather["currently"]["windSpeed"],
        this.weatherData.humidity = weather["currently"]["humidity"],
        this.weatherData.icon = weather["currently"]["icon"],
        this.weatherData.summary = weather["currently"]["summary"],
        console.log( "Weather: ", this.weatherData ); //TODO Remove
      },
      ( err ) => console.error( err ) );
  }

}
