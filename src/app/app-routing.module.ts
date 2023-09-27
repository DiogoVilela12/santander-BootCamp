import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokeComponent } from './pages/poke/poke.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'**', redirectTo: 'poke'},
  {path:'poke', component: PokeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
