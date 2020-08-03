// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cityId: 3081368, //Id of Wrocław
  secretApiKey: "2187afa1c754181060c0fe55a2d619c4",
  weatherUrl: "http://api.openweathermap.org/data/2.5/weather",
  refreshingTimePeriod: 5 * 60 * 1000, //in miliseconds
  startHourOfMorning: 4,
  startHourOfDay: 12,
  startHourOfNight: 20,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
