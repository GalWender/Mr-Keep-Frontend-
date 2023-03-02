import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

  constructor() { }

  public isSideNavOpen:boolean = false

  public STORAGE_KEY_LOGGEDIN_USER: string = 'LOGGED_IN_USER'

}
