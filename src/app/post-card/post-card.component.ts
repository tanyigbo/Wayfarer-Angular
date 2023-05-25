import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { posts } from 'src/assets/data/posts';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  postData: any;
  postDataReverse: any;
  cityId: number;

  constructor(protected router: Router) {
    //this.cityId = parseInt(router.url.substring(-1));

    // /cities/{cityId}/{postId}
    this.cityId = 0;
    this.postData = posts[this.cityId].posts.reverse();
  }
}
