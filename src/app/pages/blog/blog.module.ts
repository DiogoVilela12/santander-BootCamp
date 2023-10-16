import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBlogComponent } from './home/home-blog.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink } from '@angular/router';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MediumCardComponent } from './components/medium-card/medium-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { AgentesComponent } from './agentes/agentes.component';


@NgModule({
  declarations: [
    HomeBlogComponent,
    HeaderComponent,
    BigCardComponent,
    MediumCardComponent,
    SmallCardComponent,
    AgentesComponent,
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class BlogModule { }
