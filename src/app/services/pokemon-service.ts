import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  http = inject(HttpClient);
  httpUrl = "https://pokeapi.co/api/v2/type/"

  pokemonType = signal<string>("");
  pokemonData = signal<any>([]);
  pokemonDetails = signal<any>([]);
  pokemonImage = signal<string>('');
  typePokemonIcon = signal('');

  getPokemonPerType(type: string){
    this.http.get(`${this.httpUrl}${type}`).subscribe({
      next: (data => {
        this.pokemonData.set(data);
        const pokemonList = this.pokemonData().pokemon;
        const randomIndex = Math.floor(Math.random() * pokemonList.length);
        const pokemon = pokemonList[randomIndex].pokemon;
        
        this.pokemonDetails.set(pokemon);
        this.getPokemonImage(this.pokemonDetails().url);
        this.getPokemonTypeTag(this.pokemonData().name)
      
      }),
      error: (err) => {
        const error = "Failed to fetch data. Please try again later.";
        console.log(err)
        return error;
      }
    })
  }

  getPokemonImage(url: string) {
    this.pokemonImage.set(''); 
    
    this.http.get(url).subscribe((details: any) => {
      const imageUrl = details.sprites.other['official-artwork'].front_default;
      this.pokemonImage.set(imageUrl); 
    });
  }

  getPokemonTypeTag(type: string) {
    this.http.get(`${this.httpUrl}${type}`).subscribe({
      next: (data: any) => {
        const iconUrl = data.sprites?.['generation-iii']?.colosseum?.name_icon;
        
        if (iconUrl) {
          this.typePokemonIcon.set(iconUrl);
        }
      },
      error: (err) => console.error(err)
    });
  }


}
