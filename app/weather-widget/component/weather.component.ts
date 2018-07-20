import { Component, OnInit } from "@angular/core";

import { Weather } from "../model/weather";
import { WeatherService } from "../service/weather.service";

declare var Skycons: any;

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
  private currentLocation = "";
  private icons = new Skycons( { color: "#FFF" } );

  constructor( private service: WeatherService ) {  }

  public ngOnInit() {
    this.getCurrentLocation();
  }

  public getCurrentLocation() {
    this.service.getCurrentLocation()
      .subscribe( ( position ) => {
        this.pos = position;
        this.getCurrentWeather();
        this.getLocationName();
      },
      ( err ) => console.error( err ) );
  }
  public getCurrentWeather() {
    this.service.getCurrentWeather( this.pos.coords.latitude, this.pos.coords.longitude )
      .subscribe( ( weather ) => {
        this.weatherData.temp = weather.currently.temperature,
        this.weatherData.wind = weather.currently.windSpeed,
        this.weatherData.humidity = weather.currently.humidity,
        this.weatherData.icon = weather.currently.icon,
        this.weatherData.summary = weather.currently.summary,
        console.log( "Weather: ", this.weatherData ); // TODO Remove
        this.setIcon();
      },
      ( err ) => console.error( err ) );
  }

  public getLocationName() {
    this.service.getLocationName( this.pos.coords.latitude, this.pos.coords.longitude )
      .subscribe( ( location ) => {
        console.log( location ); // TODO: Remove
        // this.currentLocation = location["results"][1]["formatted_address"];
        this.currentLocation = location.results[1].formatted_address;
        console.log( "Name: ", this.currentLocation ); // TODO: Remove
      } );
  }

  public setIcon() {
    this.icons.add( "icon", this.weatherData.icon );
    this.icons.play();
  }

}
