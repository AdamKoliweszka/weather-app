import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-widged-refresh-button",
  templateUrl: "./widged-refresh-button.component.html",
  styleUrls: ["./widged-refresh-button.component.scss"],
  animations: [
    trigger("rotateOnRefreshing", [
      state(
        "1",
        style({
          transform: "rotate(0)",
        })
      ),
      state(
        "0",
        style({
          transform: "rotate(180deg)",
        })
      ),
      transition("0=>1", animate("1500ms")),
      transition("1=>0", animate("1500ms")),
    ]),
  ],
})
export class WidgedRefreshButtonComponent implements OnInit {
  @Input() isInRefreshingState: boolean;
  @Output() clickButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  refreshWeather() {
    // this.currentState = this.currentState === "initial" ? "final" : "initial";
    if (!this.isInRefreshingState) this.clickButton.emit();
  }
}
