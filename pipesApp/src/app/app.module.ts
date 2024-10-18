import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// configuracion de local
import { registerLocaleData } from '@angular/common';
import localeEsGT from '@angular/common/locales/es-GT';
registerLocaleData(localeEsGT);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [

    {
      provide: LOCALE_ID,
      useValue: 'es-GT'
    }

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
