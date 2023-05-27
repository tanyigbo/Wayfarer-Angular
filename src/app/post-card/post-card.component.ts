import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { posts } from 'src/assets/data/posts';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  postData: any;
  cityId: any;

 @Input() search = ''
  

  constructor(protected router: Router, private route: ActivatedRoute,
    private searchService: SearchService) {}

  searchPost(text: any) {
    console.log(this.searchService.getSetPost());
    console.log(text);
    console.log(this.cityId);
    const post = text[this.cityId];
    console.log(post.posts);
    post.posts.forEach((p:any) => {
      console.log(p.title.includes("Lon"));
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cityId = params['id'];
    });
    this.postData = posts;
    // this.searchPost(this.postData);
    
  }
  
}
