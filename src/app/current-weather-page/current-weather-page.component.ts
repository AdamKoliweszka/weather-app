import { Component, OnInit } from "@angular/core";
import { CurrentWeatherDataContainerService } from "../services/current-weather-data-container.service";
import { Observable } from "rxjs";
import { CurrentWeatherAutoRefreshService } from "../services/current-weather-auto-refresh.service";

@Component({
  selector: "app-current-weather-page",
  templateUrl: "./current-weather-page.component.html",
  styleUrls: ["./current-weather-page.component.scss"],
})
export class CurrentWeatherPageComponent implements OnInit {
  constructor(
    private currentWeatherAutoRefreshService: CurrentWeatherAutoRefreshService,
    private currentWeatherDataContainerService: CurrentWeatherDataContainerService
  ) {}

  ngOnInit() {}

  refreshWeather() {
    this.currentWeatherDataContainerService.loadCurrentWeather();
  }

  get currentTemperature$(): Observable<number> {
    return this.currentWeatherDataContainerService.temperature;
  }
}
