import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-athmospheric-pressure",
  templateUrl: "./athmospheric-pressure.component.html",
  styleUrls: ["./athmospheric-pressure.component.scss"],
})
export class AthmosphericPressureComponent implements OnInit {
  @Input() athmosphericPressure: number;
  constructor() {}

  ngOnInit() {}
}
