import { Injectable  } from "@angular/core";
import { Http, Jsonp } from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import { FORECAST_KEY, FORECAST_ROOT, GOOGLE_KEY, GOOGLE_ROOT } from "../constants/constants";

@Injectable()

export class WeatherService {

  constructor( private jsonp: Jsonp, private http: Http ) {

  }

  public getCurrentLocation(): Observable<any> {
    if ( navigator.geolocation ) {
      return Observable.create( ( observer ) => {
        navigator.geolocation.getCurrentPosition( ( pos ) => {
          observer.next( pos );
        } ),
          ( err ) => {
            return Observable.throw( err );
          };
      } );
    } else {
      return Observable.throw( "Geolocation is not available" );
    }
  }

  public getCurrentWeather( lat: number, long: number ): Observable<any> {
    const url = FORECAST_ROOT + FORECAST_KEY + "/" + lat + "," + long;
    const queryParams = "?callback=JSONP_CALLBACK&exclude=minutely,hourly,daily&units=auto";

    return this.jsonp.get( url + queryParams )
           .map( ( data ) => data.json() )
           .catch( ( err ) => {
             console.error( "Unable to get weather data - ", err );
             return Observable.throw( err.json() );
           } );
  }

  public getLocationName( lat: number, long: number ): Observable<any> {
    const url = GOOGLE_ROOT;
    const queryParams = "?latlng=" + lat + "," + long + "&key=" + GOOGLE_KEY;

    return this.http.get( url + queryParams )
      .map( ( loc ) => loc.json() )
      .catch( ( err ) => {
        console.error( "Unable to get location - ", err );
        return Observable.throw( err );
      } );
  }
}
