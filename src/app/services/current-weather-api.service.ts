import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CurrentWeatherResponse } from "../interfaces/current-weather-response.interface";

@Injectable({
  providedIn: "root",
})
export class CurrentWeatherApiService {
  constructor(private httpClient: HttpClient) {}

  getActualWeather(): Observable<CurrentWeatherResponse> {
    return this.httpClient.get<CurrentWeatherResponse>(
      environment.weatherUrl +
        "?id=" +
        environment.cityId +
        "&appid=" +
        environment.secretApiKey
    );
  }
}
