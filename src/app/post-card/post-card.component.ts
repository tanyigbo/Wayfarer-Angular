import { Component } from '@angular/core';
import { posts } from 'src/assets/data/posts';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  postData = posts;
}
