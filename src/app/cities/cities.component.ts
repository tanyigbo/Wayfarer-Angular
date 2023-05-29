import { Component, OnInit } from '@angular/core';
import { cities } from '../../assets/data/cities';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cityData: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.cityData = cities;
  }

}
