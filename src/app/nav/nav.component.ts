import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveUrlService } from '../active-url.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  protected searchBarActive: boolean = false;

  constructor(protected router: Router,
    private urlService: ActiveUrlService) {

  }

  ngOnInit(): void {
    this.urlService.getActiveUrl().subscribe((url) => {
      this.searchBarActive = url ? true : false
    })
  }

}
