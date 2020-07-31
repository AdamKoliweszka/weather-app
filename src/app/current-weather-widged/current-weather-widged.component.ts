import { Component, OnInit, Input } from "@angular/core";
import { CurrentWeather } from "../interfaces/current-weather.interface";

@Component({
  selector: "app-current-weather-widged",
  templateUrl: "./current-weather-widged.component.html",
  styleUrls: ["./current-weather-widged.component.scss"],
})
export class CurrentWeatherWidgedComponent implements OnInit {
  @Input() currentTemperature: number;
  constructor() {}

  ngOnInit() {}
}
