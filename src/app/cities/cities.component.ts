import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { cities } from '../../assets/data/cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cityData = cities;
  displaySearchBar: boolean = true;

  constructor() { }

  @Output() searchBarEvent = new EventEmitter<boolean>();

  displaySearch(): void {
    this.searchBarEvent.emit(this.displaySearchBar);
  }

  ngOnInit(): void {
    this.displaySearch()
  }
}
