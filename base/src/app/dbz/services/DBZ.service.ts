import { Injectable } from '@angular/core';
import { CharacterInterface } from '../interfaces/character.ternface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DBZService {
  constructor() {}

  public character: Array<CharacterInterface> = [
    {
      name: 'Krilin',
      power: 1000,
      id: uuid(),
    },
    {
      name: 'goku',
      power: 9500,
      id: uuid(),
    },
    {
      name: 'Vegeta',
      power: 1000,
      id: uuid(),
    },
    {
      name: 'Trunks',
      power: 9000,
      id: uuid(),
    },
    {
      name: 'Gohan',
      power: 8000,
      id: uuid(),
    },
  ];

  addnewCharacte(character: CharacterInterface): void {
    const characternew = { ...character, id: uuid() };

    this.character.push(characternew);
  }

  deleteCharacte(index: number): void {
    this.character.splice(index, 1);
  }

  deleteCharaterById(id: string): void {
    // Filtra el arreglo de personajes y solo deja los que no tengan el id que se esta buscando
    // es decir, si el id del personaje actual es diferente al id que se pasa como parametro,
    // se deja en el arreglo, sino se elimina
    this.character = this.character.filter((character) => character.id !== id);
  }
}
