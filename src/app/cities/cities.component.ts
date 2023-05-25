import { Component, OnInit } from '@angular/core';
import { cities } from '../../assets/data/cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cityData = cities;

  ngOnInit(): void {
    console.log("Testing Cities");
  }

  showChange(): void {
    console.log("Showing change");
  }
}
