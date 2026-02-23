import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from './components/search-bar/search-bar';
import { WeatherCard } from './components/weather-card/weather-card';
import { PokemonDisplay } from './components/pokemon-display/pokemon-display';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBar, WeatherCard, PokemonDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokemon-weather-finder');
}
