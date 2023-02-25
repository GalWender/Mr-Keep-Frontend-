import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent implements DoCheck {

  constructor(
    private router: Router,
    private cf:ChangeDetectorRef,
  ) { }
  @Input() isSideNavOpen!:boolean

  currRoute:string = '/'

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    
  }

  onRouteChange(ev:any) {
    this.currRoute = this.router.url
  }



}
