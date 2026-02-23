import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDisplay } from './pokemon-display';

describe('PokemonDisplay', () => {
  let component: PokemonDisplay;
  let fixture: ComponentFixture<PokemonDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
