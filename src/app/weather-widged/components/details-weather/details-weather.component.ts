import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-details-weather",
  templateUrl: "./details-weather.component.html",
  styleUrls: ["./details-weather.component.scss"],
})
export class DetailsWeatherComponent implements OnInit {
  @Input() humidityLevel: number;
  @Input() cloudinessLevel: number;
  @Input() athmosphericPressure: number;

  constructor() {}

  ngOnInit() {}
}
