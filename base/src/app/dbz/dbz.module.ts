import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { ListComponentComponent } from './components/List-Component/List-Component.component';

@NgModule({
  declarations: [
    MainPageComponent,
    FormComponentComponent,
    ListComponentComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
