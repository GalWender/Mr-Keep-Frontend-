import { StorageService } from './../../services/storage.service';
import { GlobalVarsService } from 'src/app/services/global-vars.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements DoCheck {

  constructor(
    private router: Router,
    private globalVarsService: GlobalVarsService,
    private storageService: StorageService
  ) { }

  storageRouteKey:string = 'CURRENT_ROUTE'
  currRoute!: string
  isSideNavOpen: boolean = this.globalVarsService.isSideNavOpen

  ngOnInit(): void {
    this.currRoute = this.storageService.loadFromStorage(this.storageRouteKey) || '/'
  }

  ngDoCheck(): void {
    this.isSideNavOpen = this.globalVarsService.isSideNavOpen
  }

  onRouteChange(ev: any) {
    this.currRoute = this.router.url
    this.storageService.saveToStorage(this.storageRouteKey,this.currRoute)
  }



}
