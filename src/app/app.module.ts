import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from  '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { TiqueteComponent } from './components/tiquete/tiquete.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//rutas
import { app_routing } from './app.rutas';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiqueteComponent,
    VuelosComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
