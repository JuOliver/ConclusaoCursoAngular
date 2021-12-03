import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrosModule } from './features/carros/carros.module';

import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { LoginModule } from './features/login/login.module';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarrosModule,
    LoginModule,
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
