import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CurrentWeather } from "../interfaces/current-weather.interface";

@Injectable({
  providedIn: "root",
})
export class CurrentWeatherApiService {
  constructor(private httpClient: HttpClient) {}

  getActualWeather(): Observable<CurrentWeather> {
    return this.httpClient.get<CurrentWeather>(
      environment.weatherUrl +
        "?id=" +
        environment.cityId +
        "&appid=" +
        environment.secretApiKey
    );
  }
}
