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

  post: string = '';
  contentArray: string[] = [];

  constructor(protected router: Router, private route: ActivatedRoute,
    private searchService: SearchService) {
     this.searchService
      .getPost()
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((post) => {
        this.post = post;
        this.addFilter();
      });
  }

  // filter post based on seearch
  addFilter() {
    console.log("in post card with add filter:  " + this.post);
    // console.log(this.postData[0]);
    this.postData.forEach((post: any) => {
      post.posts.forEach((p: any) => {
        this.contentArray.push(p.content);
      });

    })
   console.log(this.contentArray.filter((content) => content.includes(this.post)));
  
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cityId = params['id'];
    });
    this.postData = posts;
  }
  
}
