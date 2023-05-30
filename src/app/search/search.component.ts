import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActiveUrlService } from '../active-url.service';
import { cities } from 'src/assets/data/cities';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchInput: string = '';
  cityId: number = 0;
  cityData: any = cities;

  constructor(
    private searchService: SearchService,
    private urlService: ActiveUrlService) { }

  // get the search input and send to service
  getSearchedPost(text: string) {
    this.searchInput = text;
    this.searchService.sendPost(this.searchInput);
  }

  ngOnInit(): void {
    this.urlService.getActiveUrl().subscribe((url) => {
      this.cityId = url ? parseInt(url) : 0;
      this.searchInput = '';
    })
  }

}
