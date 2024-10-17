import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.ternface';

@Component({
  selector: 'app-list-component',
  templateUrl: './List-Component.component.html',
  styleUrl: './List-Component.component.css',
})
export class ListComponentComponent {
  @Input()
  public characters: Array<CharacterInterface> = [];

  @Output()
  public onRemoveCharacter: EventEmitter<number> = new EventEmitter();

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Removes a character from the list at the given index
   * @param index the index of the character to remove
   */
  /******  5ec49c4e-08c6-4e5f-8245-b9edb55117ea  *******/
  onDeleteCharacter(index: number): void {
    this.onRemoveCharacter.emit(index);
  }
}
