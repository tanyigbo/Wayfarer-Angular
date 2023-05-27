import { Component, OnInit} from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  post: string = '';

  constructor(private searchService: SearchService) { }

  // get the search input and send to service
  getSearchedPost(event: Event) {
    const filterPost = (event.target as HTMLInputElement).value;
    this.post = filterPost;
    this.searchService.sendPost(this.post);
  }

  ngOnInit(): void {
      
  }

}
