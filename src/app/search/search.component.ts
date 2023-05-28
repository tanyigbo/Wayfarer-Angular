import { Component, OnInit} from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchInput: string = '';

  constructor(private searchService: SearchService) { }

  // get the search input and send to service
  getSearchedPost(text: string) {
    this.searchInput = text;
    this.searchService.sendPost(this.searchInput);
  }

  ngOnInit(): void {
      
  }

}
