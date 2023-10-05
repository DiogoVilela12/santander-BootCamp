import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillBoxComponent } from './components/skill-box/skill-box.component'
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './home.component'
import { CardTextComponent } from '../home/components/card-text/card-text.component'
import { HeaderComponent } from './components/header/header.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SkillBoxComponent,
    SkillsComponent,
    HomeComponent,
    CardTextComponent,
    HeaderComponent
  ],
  exports: [
    SkillBoxComponent,
    SkillsComponent,
    HomeComponent,
    CardTextComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class HomeModule { }
