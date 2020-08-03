import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "src/environments/environment";
import { TimeOfDay } from "../../enums/time-of-day.enum";

@Pipe({
  name: "dateToTimeOfDay",
})
export class DateToTimeOfDayPipe implements PipeTransform {
  transform(date: Date): TimeOfDay {
    if (!date) return null;
    let hour = date.getHours();
    if (
      hour >= environment.startHourOfMorning &&
      hour < environment.startHourOfDay
    ) {
      return TimeOfDay.MORNING;
    } else if (
      hour >= environment.startHourOfDay &&
      hour < environment.startHourOfNight
    ) {
      return TimeOfDay.DAY;
    } else return TimeOfDay.NIGHT;
  }
}
