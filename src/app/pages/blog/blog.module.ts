import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBlogComponent } from './home/home-blog.component';



@NgModule({
  declarations: [
    HomeBlogComponent,
  ],
  imports: [
    CommonModule,
  ], exports: [
    HomeBlogComponent
  ]
})
export class BlogModule { }
