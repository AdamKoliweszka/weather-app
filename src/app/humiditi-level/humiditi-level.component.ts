import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-humiditi-level",
  templateUrl: "./humiditi-level.component.html",
  styleUrls: ["./humiditi-level.component.scss"],
})
export class HumiditiLevelComponent implements OnInit {
  @Input() humidityLevel: number;
  constructor() {}

  ngOnInit() {}
}
