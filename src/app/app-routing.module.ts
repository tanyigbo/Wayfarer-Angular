import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroImageComponent } from '../app/landing-page/hero-image/hero-image.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDisplayComponent } from './city-display/city-display.component';

const routes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent, // this should be the cities component
    children: [
      {
        path:':id',
        component:CityDisplayComponent
      }
    ]
  },
  {
    path: '**',
    component: HeroImageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
