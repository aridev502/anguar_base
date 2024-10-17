import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.ternface';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css',
})
export class FormComponentComponent {
  @Output() public onNewCharacter: EventEmitter<CharacterInterface> =
    new EventEmitter();

  public character: CharacterInterface = {
    name: '',
    power: 0,
  };

  emmitCharacter(): void {
    if (this.character.name.trim().length === 0) return;
    console.log(this.character);

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
