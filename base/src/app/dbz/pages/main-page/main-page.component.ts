import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.ternface';
import { DBZService } from '../../services/DBZ.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private dbzservice: DBZService) {}

  get character(): CharacterInterface[] {
    return [...this.dbzservice.character];
  }

  onDeleteCharacterById(index: string): void {
    this.dbzservice.deleteCharaterById(index);
  }

  onDeleteCharacter(index: number): void {
    this.dbzservice.deleteCharacte(index);
  }

  addNewCharacter(character: CharacterInterface): void {
    this.dbzservice.addnewCharacte(character);
  }
}
