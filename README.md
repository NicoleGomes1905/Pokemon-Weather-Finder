```markdown
# 🌦️ Pokemon Weather Finder

An interactive application that uses real-time weather data to find Pokémon based on current local conditions, featuring dynamic animations and a responsive interface.

## ✨ Features
* **Weather-Based Search**: Finds Pokémon based on the meteorological conditions of the searched city.
* **Spawn Animations**: Scale and opacity visual effects (`@pokeSpawn`) triggered every time a new Pokémon appears.
* **Centered Interface**: Layout adjusted for total focus on the Pokémon and its types.

## 🚀 Technologies
* **Angular 18+**
* **Signals**
* **Angular Animations**
* **PokeAPI & OpenWeather**: Integration with external APIs.

## 🛠️ Installation and Setup
```bash
# Install dependencies (ensure @angular/animations is included)
npm install

# Start the development server
ng serve

```

## 🧠 Technical Challenges Overcome

* **Animation Reset via Signals**: Instead of relying on complex blocks, the animation reset is achieved by clearing the `pokemonImage` signal before each new fetch. This forces the `@if` block to destroy and recreate the element, triggering the `:enter` animation perfectly.
* **Error Handling**: Resolved `NG5002` compiler errors by simplifying nested blocks and handled null data using Optional Chaining (`?.`) to prevent console crashes.
* **Layout & Alignment**: Implemented Flexbox centering to ensure the Pokémon and its name (e.g., "sandygast") are perfectly aligned regardless of image size.

---

Developed with Angular and plenty of caffeine. ☕
