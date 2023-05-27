import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit {

  searchedPost: string = '';
  private post = new BehaviorSubject("");
  getPost = this.post.asObservable();

  // declare an observable
   private searchSubject = new Subject();
    
  constructor() { }

  // findPost(post: string) {
  //   console.log("findpost " + post);
  //   this.searchSubject.next(post);
  // }

  setPost(post: string) {
    console.log(post);
    this.searchedPost = post;
    this.post.next(post);
  }
  getSetPost() : string {
    return this.searchedPost;
  }

  // getPost() : Observable<any> {
  //   console.log("in getPost")
  //   return this.searchSubject.asObservable();
  // }

  ngOnInit(): void {
    // console.log(this.searchSubject);
    //   this.searchSubject.subscribe(post => {
       
    //     console.log("ngOnit of search service : " + post);
    //   })
  }
}
