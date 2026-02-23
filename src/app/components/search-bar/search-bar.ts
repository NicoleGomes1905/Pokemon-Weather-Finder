import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather-service';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  city = signal('');

  constructor(
    private weatherService: WeatherService
  ) {}

  searchCityWeather(){
    this.weatherService.getCityWeather(this.city());
  }
}
