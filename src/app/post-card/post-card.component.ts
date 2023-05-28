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
  cityPost: any;
  showFilteredPost: any;

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

  // filter post based on seearch
  addFilter() {
    this.showFilteredPost = {};
    console.log(this.showFilteredPost);
    this.cityPost.posts.forEach((post: any) => {
     if (post.content.includes(this.searchText)) {
        console.log(post);
        posts[this.cityId].posts = [];
        this.showFilteredPost = post;
        posts[this.cityId].posts.push(this.showFilteredPost);
     }
    });
    
    console.log(posts[this.cityId].posts);
    console.log(this.showFilteredPost);
    if (this.showFilteredPost.length) this.postData = posts;
  }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cityId = params['id'];
    });
    this.postData = posts;
    // get city post for filtering
    this.cityPost = this.postData[this.cityId];
  }

  
  
}
