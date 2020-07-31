import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-widged-refresh-button",
  templateUrl: "./widged-refresh-button.component.html",
  styleUrls: ["./widged-refresh-button.component.scss"],
})
export class WidgedRefreshButtonComponent implements OnInit {
  @Output() clickButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  refreshWeather() {
    this.clickButton.emit();
  }
}
