import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/assets/data/posts';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  activePost: any;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.pathFromRoot[1].url.subscribe(params => {
      let cityId: number = parseInt(params[1].path);
      let postId: number = parseInt(params[3].path);
      this.activePost = posts[cityId].posts[postId];
    });


  }
}
