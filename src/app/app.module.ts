import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './navbar/nav/nav.component';
import { GridDynamicComponent } from './shared/grid-dynamic/grid-dynamic.component';

//Rutas
import { APP_ROUTING } from './app-routing.module';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GridDynamicComponent,
    VehiculosComponent,
    LenguajesComponent,
    UsuarioComponent,
    DepartamentosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
