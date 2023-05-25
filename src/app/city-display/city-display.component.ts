import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cities } from 'src/assets/data/cities';

@Component({
  selector: 'app-city-display',
  templateUrl: './city-display.component.html',
  styleUrls: ['./city-display.component.css']
})
export class CityDisplayComponent implements OnInit {

  cityData: any
  cityId: any;

  constructor(protected router: Router, private route: ActivatedRoute) {
    this.cityData = cities;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cityId = params['id'];
    });
  }
}
