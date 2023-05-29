import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { posts } from 'src/assets/data/posts';
import { SearchService } from '../search.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})

export class PostCardComponent implements OnInit {
  postData: any;
  cityId: any;
  searchText: string = '';

  constructor(protected router: Router, private route: ActivatedRoute,
    private searchService: SearchService) {
    this.searchService
      .getPost()
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((text) => {
        this.searchText = text;
        this.addFilter();
      });
  }

  /**
   * Method filters specific post based on search criteria
   */
  addFilter() {
    this.postData = posts[this.cityId].posts.filter((eachPost: any) => eachPost.content.includes(this.searchText));

    if (this.searchText == '') this.postData = posts[this.cityId].posts.slice().reverse();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cityId = params['id'];
      this.postData = posts[this.cityId].posts.slice().reverse();
    });
  }
}