import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PokeHomeComponent } from './pages/poke/home/pokeHome.component';
import { PokemonComponent } from './pages/poke/pokemon/pokemon.component';
import { HomeBlogComponent } from './pages/blog/home/home-blog.component';
import { AgentesComponent } from './pages/blog/agentes/agentes.component';
import { PlayStationStoreComponent } from './pages/play-station-store/Home/play-station-store.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'poke', component: PokeHomeComponent },
  { path: 'poke/:id', component: PokemonComponent },
  { path: 'blog', component: HomeBlogComponent},
  { path: 'blog/:id', component: AgentesComponent},
  { path: 'PlayStationStore', component: PlayStationStoreComponent},
  { path: '**', redirectTo: '' }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
