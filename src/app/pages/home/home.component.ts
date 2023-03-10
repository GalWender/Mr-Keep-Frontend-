import { GlobalVarsService } from 'src/app/services/global-vars.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {

  constructor(
    private globalVarsService:GlobalVarsService
  ) { }
  isSideNavOpen:boolean = this.globalVarsService.isSideNavOpen

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.isSideNavOpen = this.globalVarsService.isSideNavOpen
  }

}
