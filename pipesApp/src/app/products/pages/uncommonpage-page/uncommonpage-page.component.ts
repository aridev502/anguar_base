import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommonpage-page',
  templateUrl: './uncommonpage-page.component.html',
  styleUrl: './uncommonpage-page.component.css'
})
export class UncommonpagePageComponent {

  // i18 nselect

  public name = 'ariel';
  public gender: 'male' | 'female' = 'male';

  public invitacionMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  changeClient(): void {

    this.name = 'Valeria';
    this.gender = 'female';

  }

  // i18nPlural

  public clientes: string[] = ['maria', 'pedro', 'juan', 'carlos', 'luis', 'jose', 'miguel'];
  public clientesMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteclient(): void {
    this.clientes.shift();
  }

}
