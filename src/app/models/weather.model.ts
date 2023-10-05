export interface WeatherData {
  data: Data;
  location: Location;
}

export interface Data {
  time: string;
  values: Values;
}

export interface Values {
  cloudBase: any;
  cloudCeiling: any;
  cloudCover: number;
  dewPoint: number;
  freezingRainIntensity: number;
  humidity: number;
  precipitationProbability: number;
  pressureSurfaceLevel: number;
  rainIntensity: number;
  sleetIntensity: number;
  snowIntensity: number;
  temperature: number;
  temperatureApparent: number;
  uvHealthConcern: number;
  uvIndex: number;
  visibility: number;
  weatherCode: number;
  windDirection: number;
  windGust: number;
  windSpeed: number;
}

export interface Location {
  lat: number;
  lon: number;
}
