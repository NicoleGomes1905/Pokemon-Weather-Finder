import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../enviroments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  http = inject(HttpClient);
  httpUrl = "https://api.openweathermap.org/data/2.5/weather";
  apiKey = environment.weatherApiKey;
  weatherTemp = signal<number>(0); 
  weatherCity = signal<string>("");
  weather = signal<string>("");
  weatherData = signal<any>([]);

  getCityWeather(city: string){
    return this.http.get(`${this.httpUrl}?q=${city}&appid=${this.apiKey}&units=metric`).subscribe({
      next:(data: any) => {
        this.weatherData.set(data);
        this.weatherTemp.set(data.main.temp);
        this.weather.set(data.weather[0].main);
        this.weatherCity.set(city);
      },
      error:(err) => {
        const error = "Failed to fetch data. Please try again later.";
        console.log(err);
        return error;
      }
    })
  }


}
