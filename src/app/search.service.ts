import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService  {


  // declare an observable & observer to receive the search input
  private searchSubject = new Subject<any>();
    
  constructor() { }

  // send the value to search w/in post
  sendPost(post: string) {
    this.searchSubject.next(post);
  }
  // return the value
  getPost() : Observable<any> {
    return this.searchSubject.asObservable();
  }


}
