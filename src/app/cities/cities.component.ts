import { Component, OnInit } from '@angular/core';
import { cities } from '../../assets/data/cities';
import { posts } from '../../assets/data/posts';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cityData = cities;
  cityId: number = 0;

  constructor() {

  }
  ngOnInit(): void {
  }
}
