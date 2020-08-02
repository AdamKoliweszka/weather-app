import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cloudiness",
  templateUrl: "./cloudiness.component.html",
  styleUrls: ["./cloudiness.component.scss"],
})
export class CloudinessComponent implements OnInit {
  @Input() cloudinessLevel: number;
  constructor() {}

  ngOnInit() {}
}
