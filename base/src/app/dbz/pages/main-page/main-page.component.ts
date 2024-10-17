import { Component } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.ternface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  public character: Array<CharacterInterface> = [
    {
      name: 'Krilin',
      power: 1000,
    },
    {
      name: 'goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 1000,
    },
    {
      name: 'Trunks',
      power: 9000,
    },
    {
      name: 'Gohan',
      power: 8000,
    },
  ];

  addnewCharacte(character: CharacterInterface): void {
    this.character.push(character);
  }

  deleteCharacte(index: number): void {
    this.character.splice(index, 1);
  }
}
