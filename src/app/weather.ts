export interface WeatherInfo {
  main: string;
  icon: string;
}

export interface Weather {
  weather: WeatherInfo[]; //
  //   weather: Array<{
  //     main: string;
  //     icon: string;
  //   }>; //
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  name: string;
}
