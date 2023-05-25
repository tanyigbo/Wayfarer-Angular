import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  displaySearchBar: boolean = false;

  displaySearch(): void {
    this.displaySearchBar = true;
  }

  hideSearch(): void {
    this.displaySearchBar = false;
  }
}
