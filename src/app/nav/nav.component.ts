import { Component } from '@angular/core';

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
