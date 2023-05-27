import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  post: string = '';


  constructor(private searchService: SearchService) { 
    this.searchService.getPost.subscribe(post => this.post = post);
  }


  getSearchedPost(event: Event) {
    const filterPost = (event.target as HTMLInputElement).value;
    this.post = filterPost.trim().toLowerCase();
    console.log(this.post);
    this.setPost();
  }

  ngOnInit(): void {
      
  }
  setPost(){
    this.searchService.setPost(this.post);
  }
}
