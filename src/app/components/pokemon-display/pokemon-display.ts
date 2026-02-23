import { Component, computed, effect, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { WeatherService } from '../../services/weather-service';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pokemon-display',
  animations: [
    trigger('pokeSpawn', [
      transition(':enter', [
        style({ transform: 'scale(0) translateY(100px)', opacity: 0, filter: 'brightness(5)' }),
        animate('800ms ease-out', 
          style({ transform: 'scale(1) translateY(0)', opacity: 1, filter: 'brightness(1)' })
        )
      ])
    ])
  ],
  imports: [FormsModule],
  templateUrl: './pokemon-display.html',
  styleUrl: './pokemon-display.css',
})
export class PokemonDisplay {

  constructor(
    public weatherService: WeatherService,
    public pokemonService: PokemonService 
  ) {
    effect(() => {
    const response = this.pokemonService.getPokemonPerType(this.pokemonType());
  });
  }

  pokemonType = computed(() => {
    const temp = this.weatherService.weatherTemp();
    if (this.weatherService.weather().toLowerCase() === 'rain') return 'electric';
    if (temp < 5) return 'ice';
    if (temp >= 5 && temp < 12) return 'water';
    if (temp >= 12 && temp < 15) return 'grass';
    if (temp >= 15 && temp < 23) return 'ground';
    if (temp >= 23 && temp < 27) return 'bug';
    if (temp >= 27 && temp <= 33) return 'rock';
    if (temp > 33) return 'fire';
    return 'normal';
  });

}
