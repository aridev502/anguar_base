import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { BaseicsPageComponent } from "./pages/baseics-page/baseics-page.component";
import { NumbersPageComponent } from "./pages/numbers-page/numbers-page.component";
import { UncommonpagePageComponent } from "./pages/uncommonpage-page/uncommonpage-page.component";

const routes: Routes = [
  {
    path: '',
    component: BaseicsPageComponent
  }, {
    path: 'numbers',
    component: NumbersPageComponent
  }, {
    path: 'uncommon',
    component: UncommonpagePageComponent
  }, {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class ProductsRoutingModule { }