import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-weather-status",
  templateUrl: "./weather-status.component.html",
  styleUrls: ["./weather-status.component.scss"],
})
export class WeatherStatusComponent implements OnInit {
  @Input() iconId: string;
  constructor() {}

  ngOnInit() {}

  get iconUrl(): string {
    return "http://openweathermap.org/img/w/" + this.iconId + ".png";
  }
}
