import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "temperatureToCelsius",
})
export class TemperatureToCelsiusPipe implements PipeTransform {
  transform(value: number): any {
    const absoluteZeroInCelsius = 273.15;
    return value - absoluteZeroInCelsius;
  }
}
