import { Injectable, OnDestroy } from "@angular/core";
import { CurrentWeatherDataContainerService } from "./current-weather-data-container.service";
import { Observable, interval, Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { startWith } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CurrentWeatherAutoRefreshService implements OnDestroy {
  subscription: Subscription;
  constructor(
    private currentWeatherDataContainerService: CurrentWeatherDataContainerService
  ) {
    this.subscription = interval(environment.refreshingTimePeriod)
      .pipe(startWith(0))
      .subscribe(() => {
        this.currentWeatherDataContainerService.loadCurrentWeather();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
