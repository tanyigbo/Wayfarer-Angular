import { Component } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  cities_count = new Array(4);
  names: string[] = ["San Francisco", "London", "Sydney", "Seattle"];

}
