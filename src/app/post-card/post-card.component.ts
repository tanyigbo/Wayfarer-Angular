import { Component, Input, OnInit } from '@angular/core';
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

  constructor(protected router: Router, private route: ActivatedRoute,
    private searchService: SearchService) {
     this.searchService
      .getPost()
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((post) => {
        this.searchText = post;
        this.addFilter();
      });
  }

  // filter post based on seearch
  addFilter() {
    console.log(this.cityPost);
    this.cityPost.posts.forEach((post: any) => {
     if (post.content.includes(this.searchText)) {
        // post.city = "London";
        console.log(post);
       
        this.postData.posts = post; 
        // this.cityPost.posts = post;
     }
    });
    
    // console.log(this.postData);
    console.log(this.cityPost.posts);
    console.log(this.postData.posts);
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
