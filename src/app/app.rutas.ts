import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { TiqueteComponent } from "./components/tiquete/tiquete.component";
import { VuelosComponent } from "./components/vuelos/vuelos.component";

const app_routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'tiquete', component: TiqueteComponent},
    { path: 'vuelos', component: VuelosComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home'},
];

export const app_routing = RouterModule.forRoot(app_routes);