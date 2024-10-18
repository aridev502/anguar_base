import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonpagePageComponent } from './pages/uncommonpage-page/uncommonpage-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BaseicsPageComponent } from './pages/baseics-page/baseics-page.component';



@NgModule({
  declarations: [
    BaseicsPageComponent,
    NumbersPageComponent,
    UncommonpagePageComponent
  ],
  imports: [
    CommonModule, ProductsRoutingModule, PrimeNgModule
  ]
})
export class ProductsModule { }
