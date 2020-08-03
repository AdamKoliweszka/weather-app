import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-widged-calculation-info",
  templateUrl: "./widged-calculation-info.component.html",
  styleUrls: ["./widged-calculation-info.component.scss"],
})
export class WidgedCalculationInfoComponent implements OnInit {
  @Input() timeOfCalculation: string;
  @Input() city: string;
  constructor() {}

  ngOnInit() {}
}
