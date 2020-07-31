import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-widged-refresh-button",
  templateUrl: "./widged-refresh-button.component.html",
  styleUrls: ["./widged-refresh-button.component.scss"],
})
export class WidgedRefreshButtonComponent implements OnInit {
  @Input() isInRefreshingState: boolean;
  @Output() clickButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  refreshWeather() {
    if (!this.isInRefreshingState) this.clickButton.emit();
  }
}
