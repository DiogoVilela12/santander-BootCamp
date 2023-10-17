import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { PokeModule } from './pages/poke/poke.module';
import { HttpClientModule } from '@angular/common/http';
import { BlogModule } from './pages/blog/blog.module';
import { PlayStationStoreModule } from './pages/play-station-store/play-station-store.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokeModule,
    HomeModule,
    BlogModule,
    PlayStationStoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
