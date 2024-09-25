import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AlbumDitailsComponent } from './pages/album-ditails/album-ditails.component';
import { CardComponent } from './components/card/card.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AlbumPageComponent,
    HeaderComponent,
    AlbumDitailsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
