import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { WeatherComponent } from "./weather-widget/component/weather.component";
import { SpeedUnitPipe } from "./weather-widget/pipe/speed-unit.pipe";

@NgModule( {
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, SpeedUnitPipe, WeatherComponent ],
  imports: [ BrowserModule, HttpModule, JsonpModule ],
} )

export class AppModule {  }
