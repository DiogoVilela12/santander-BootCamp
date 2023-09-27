import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeComponent } from './poke.component';



@NgModule({
  declarations: [
    PokeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokeComponent
  ]
})
export class PokeModule { }
