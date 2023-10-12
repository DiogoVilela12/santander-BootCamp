import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PokeHomeComponent } from './pages/poke/home/pokeHome.component';
import { PokemonComponent } from './pages/poke/pokemon/pokemon.component';
import { HomeBlogComponent } from './pages/blog/home/home-blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'poke', component: PokeHomeComponent },
  { path: 'poke/:id', component: PokemonComponent },
  { path: 'blog', component: HomeBlogComponent},
  { path: '**', redirectTo: '' }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
