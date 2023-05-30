import { Component, OnInit } from '@angular/core';
import { ActiveUrlService } from '../active-url.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent implements OnInit {

  protected searchBarActive: boolean = false;

  constructor(private urlService: ActiveUrlService) { }

  ngOnInit(): void {
    this.urlService.getActiveUrl().subscribe((url) => {
      this.searchBarActive = url ? true : false
    })
  }

}
