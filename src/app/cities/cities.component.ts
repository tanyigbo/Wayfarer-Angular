import { Component } from '@angular/core';
import { cities } from '../../assets/data/cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  cityData = cities;
}
