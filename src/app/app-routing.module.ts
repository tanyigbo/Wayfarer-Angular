import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroImageComponent } from '../app/landing-page/hero-image/hero-image.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDisplayComponent } from './city-display/city-display.component';
import { ShowPostComponent } from './show-post/show-post.component';


const routes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent, // this should be the cities component
    children: [
      {
        path: ':id',
        component: CityDisplayComponent
      }
    ]
  },
  {
    path: 'cities/:id/post/:id',  // specific city specific post
    component: ShowPostComponent
  },
  {
    path: '**',  // wildcard
    component: HeroImageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
