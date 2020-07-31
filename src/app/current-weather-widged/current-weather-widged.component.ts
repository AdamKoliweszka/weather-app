import { Component, OnInit, Input } from "@angular/core";
import { CurrentWeather } from "../interfaces/current-weather.interface";
import { CurrentWeatherAutoRefreshService } from "../services/current-weather-auto-refresh.service";
import { CurrentWeatherDataContainerService } from "../services/current-weather-data-container.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-current-weather-widged",
  templateUrl: "./current-weather-widged.component.html",
  styleUrls: ["./current-weather-widged.component.scss"],
})
export class CurrentWeatherWidgedComponent implements OnInit {
  @Input() currentTemperature: number;
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
  get minTemperature$(): Observable<number> {
    return this.currentWeatherDataContainerService.minTemperature;
  }
  get maxTemperature$(): Observable<number> {
    return this.currentWeatherDataContainerService.maxTemperature;
  }

  get dataOfCalculation$(): Observable<Date> {
    return this.currentWeatherDataContainerService.dataOfCalculation;
  }

  get nameOfCity$(): Observable<string> {
    return this.currentWeatherDataContainerService.nameOfCity;
  }

  get iconId$(): Observable<string> {
    return this.currentWeatherDataContainerService.iconId;
  }

  get humidityLevel$(): Observable<number> {
    return this.currentWeatherDataContainerService.humidity;
  }
  get cloudinessLevel$(): Observable<number> {
    return this.currentWeatherDataContainerService.cloudiness;
  }
  get athmosphericPressure$(): Observable<number> {
    return this.currentWeatherDataContainerService.athmosphericPressure;
  }
}
