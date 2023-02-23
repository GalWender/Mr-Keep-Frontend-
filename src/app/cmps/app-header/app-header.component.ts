import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  isSearch = false

  ngOnInit(): void {
    const elSearchInput = document.querySelector("#input-search")
    console.log(elSearchInput)
  }

  onSearchRoute() {
    this.isSearch = !this.isSearch
  }

}
