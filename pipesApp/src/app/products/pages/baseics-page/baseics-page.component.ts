import { Component } from '@angular/core';

@Component({
  selector: 'app-baseics-page',
  templateUrl: './baseics-page.component.html',
  styleUrl: './baseics-page.component.css'
})
export class BaseicsPageComponent {

  public namelowe = 'ariel';
  public namelupper = 'ARIEL';
  public fillname = 'aRiel RamiRez';

  public customDate: Date = new Date();

}
