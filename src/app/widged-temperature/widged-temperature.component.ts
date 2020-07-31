import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-widged-temperature",
  templateUrl: "./widged-temperature.component.html",
  styleUrls: ["./widged-temperature.component.scss"],
})
export class WidgedTemperatureComponent implements OnInit {
  @Input() temperature: number;
  @Input() minTemperature: number;
  @Input() maxTemperature: number;
  constructor() {}

  ngOnInit() {}
}
