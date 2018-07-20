import { Pipe, PipeTransform } from "@angular/core";

@Pipe( {
  name: "speedUnit",
} )

export class SpeedUnitPipe implements PipeTransform {
  public transform( speed: number, unitType: string ) {
    switch ( unitType ) {
      case "mph":
        const miles = speed * 1.6;
        return miles + "mph";
      default:
        return speed + "kph";
    }
  }
}
