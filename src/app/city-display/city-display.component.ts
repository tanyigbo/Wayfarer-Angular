import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cities } from 'src/assets/data/cities';

@Component({
  selector: 'app-city-display',
  templateUrl: './city-display.component.html',
  styleUrls: ['./city-display.component.css']
})
export class CityDisplayComponent implements OnInit {

  cityData: any
  cityId: any;

  constructor(protected router: Router) {
    this.cityId = parseInt(this.router.url.slice(-1));
    this.cityData = cities;
  }

  ngOnInit(): void {
    console.log("Testing");

  }
  updatePage(value: number): void {
    this.cityId = value;
  }
}
