import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { TopicComponent } from './topic/topic.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    HeroImageComponent,
    TopicComponent],
  imports: [
    CommonModule,
    MatCardModule
  ], exports: [
    HeroImageComponent,
    TopicComponent],
})
export class LandingPageModule { }
