import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { posts } from 'src/assets/data/posts';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  postData: any;
  cityId: any;

  constructor(protected router: Router) { }

  ngOnInit(): void {
    this.cityId = parseInt(this.router.url.slice(-1));
    this.postData = posts[this.cityId].posts.reverse();
  }


}
