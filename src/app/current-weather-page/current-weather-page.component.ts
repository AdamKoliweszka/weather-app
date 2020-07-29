import { Component, OnInit } from "@angular/core";
import { CurrentWeatherApiService } from "../services/current-weather-api.service";
import { CurrentWeatherResponse } from "../interfaces/current-weather-response.interface";

@Component({
  selector: "app-current-weather-page",
  templateUrl: "./current-weather-page.component.html",
  styleUrls: ["./current-weather-page.component.sass"],
})
export class CurrentWeatherPageComponent implements OnInit {
  currentWeather: CurrentWeatherResponse;
  constructor(private currentWeatherApiService: CurrentWeatherApiService) {}

  ngOnInit() {}

  refreshWeather() {
    this.currentWeatherApiService.getActualWeather().subscribe((value) => {
      this.currentWeather = value;
    });
  }
}
