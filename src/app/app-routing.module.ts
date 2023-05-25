import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroImageComponent } from '../app/landing-page/hero-image/hero-image.component';
import { CitiesComponent } from './cities/cities.component';
import { ShowPostComponent } from './show-post/show-post.component';

const routes: Routes = [
  {
    path: 'cities',  // list of cities
    component: CitiesComponent 
  },
  {
    path:'cities/1/post/1',  // specific city specific post
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
