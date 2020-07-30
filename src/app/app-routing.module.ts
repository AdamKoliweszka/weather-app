import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CurrentWeatherPageComponent } from "./current-weather-page/current-weather-page.component";

const routes: Routes = [{ component: CurrentWeatherPageComponent, path: "" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
