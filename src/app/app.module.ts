import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialUiModule } from './material-ui/material-ui.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { CitiesComponent } from './cities/cities.component';
import { SearchComponent } from './search/search.component';
import { PostCardComponent } from './post-card/post-card.component';
import { FooterComponent } from './footer/footer.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { CityDisplayComponent } from './city-display/city-display.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent, 
    CitiesComponent, 
    SearchComponent, 
    PostCardComponent, 
    FooterComponent, 
    CityDisplayComponent,
    ShowPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingPageModule,
    MaterialUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
