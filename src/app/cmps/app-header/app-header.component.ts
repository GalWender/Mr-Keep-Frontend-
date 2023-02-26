import { StorageService } from './../../services/storage.service';
import { GlobalVarsService } from 'src/app/services/global-vars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {
  
  constructor(
    private globalVarsService:GlobalVarsService,
    private storageService:StorageService,
    ) { }

    isSideNavOpenStorageKey:string = 'IS_SIDE_NAV_OPEN'
    
    ngOnInit(): void {
      this.globalVarsService.isSideNavOpen = this.storageService.loadFromStorage(this.isSideNavOpenStorageKey) || false
    }

    onSideNavToggle() {
      this.globalVarsService.isSideNavOpen = !this.globalVarsService.isSideNavOpen
      this.storageService.saveToStorage(this.isSideNavOpenStorageKey,this.globalVarsService.isSideNavOpen)
    }
    
}
