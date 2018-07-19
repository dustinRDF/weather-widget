import { Component } from "@angular/core";

@Component( {
  selector: "my-app",
  styles: [ `
    .container {
      padding-top: 5rem;
    }

  ` ],
  template: `
    <div class="container">
      <div class="col-xs-4">
        <weather-widget></weather-widget>
      </div>
    </div>
  `,
} )

export class AppComponent {  }
