import { NgModule } from "@angular/core";
import { JsonpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { WeatherComponent } from "./weather-widget/component/weather.component";

@NgModule( {
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, WeatherComponent ],
  imports: [ BrowserModule, JsonpModule ],
} )

export class AppModule {  }
