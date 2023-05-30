import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveUrlService {

  private urlSubject = new Subject<any>();

  constructor() { }

  sendActiveUrl(url: string) {
    this.urlSubject.next(url);
  }

  getActiveUrl(): Observable<string> {
    return this.urlSubject.asObservable();
  }
}
