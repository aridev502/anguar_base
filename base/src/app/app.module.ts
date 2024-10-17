import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { FormComponentComponent } from './dbz/components/form-component/form-component.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
