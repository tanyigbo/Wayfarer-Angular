import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroImageComponent } from '../app/landing-page/hero-image/hero-image.component';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent // this should be the cities component
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
