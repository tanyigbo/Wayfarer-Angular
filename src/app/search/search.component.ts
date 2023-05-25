import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  searchTopics(searchInput: string) {
    console.log(`Searching Topics for ${searchInput}`);
  }

}
