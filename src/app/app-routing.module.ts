// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


  
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
// import { HomeComponent } from './components/home/home.component';
// import { AboutComponent } from './components/about/about.component';
// import { HeroesComponent } from './components/heroes/heroes.component';
// import { HeroeComponent } from './components/heroe/heroe.component';

const APP_ROUTES: Routes = [
    { path: 'vehiculos', component: VehiculosComponent },
    { path: 'lenguajes', component: LenguajesComponent },
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'departamentos', component: DepartamentosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'vehiculos' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);