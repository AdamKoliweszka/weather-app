import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { WeatherWidgedModule } from "../weather-widged/weather-widged.module";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, WeatherWidgedModule, HomeRoutingModule],
})
export class HomeModule {}
