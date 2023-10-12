import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBlogComponent } from './home/home-blog.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink } from '@angular/router';
import { BigCardComponent } from './components/big-card/big-card.component';



@NgModule({
  declarations: [
    HomeBlogComponent,
    HeaderComponent,
    BigCardComponent,
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class BlogModule { }
